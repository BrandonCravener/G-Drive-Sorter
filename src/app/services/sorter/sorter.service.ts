import { Injectable } from '@angular/core';

import { ConfigsInterface, GroupFolderInterface, GroupInterface } from '../../../interfaces';
import { ConfigBuilder } from '../../classes/config-builder';
import { DriveQueryBuilder } from '../../classes/drive-query-builder';
import { DatabaseService } from '../database/database.service';
import { GoogleService } from '../google/google.service';

/**
 * Workaround for testing
 */
declare var gapi: any;

@Injectable()
export class SorterService {
  config: ConfigsInterface;

  constructor(
    private google: GoogleService,
    private database: DatabaseService
  ) {
    this.loadConfig();
    this.database.activeConfigChanged.subscribe(() => {
      this.loadConfig();
    });
  }

  private getDriveQuery(group: GroupInterface): string {
    let driveQuery = new DriveQueryBuilder(group.source.folderID, true);
    group.rules.forEach(rule => {
      switch (rule.classifier) {
        case 'fullText':
          driveQuery = driveQuery.fullTextContains(rule.data.fullText);
          break;
        case 'title':
          const title = rule.data.title;
          switch (rule.constraint) {
            case 'include':
              driveQuery = driveQuery.nameContains(title);
              break;
            case 'exclude':
              driveQuery = driveQuery.nameExcludes(title);
              break;
          }
          break;
        case 'type':
          const type = rule.data.fileType;
          switch (rule.constraint) {
            case 'include':
              driveQuery = driveQuery.requiresType(type);
              break;
            case 'exclude':
              driveQuery = driveQuery.excludeType(type);
              break;
          }
          break;
        case 'owner':
          const owner = rule.data.owner;
          switch (rule.constraint) {
            case 'include':
              driveQuery = driveQuery.hasOwner(owner);
              break;
            case 'exclude':
              driveQuery = driveQuery.excludesOwner(owner);
              break;
          }
          break;
        case 'creationDate':
          switch (rule.constraint) {
            case 'include':
              driveQuery = driveQuery.createdAfter(rule.data.date);
              break;
            case 'exclude':
              driveQuery = driveQuery.createdBefore(rule.data.date);
              break;
            case 'between':
              driveQuery = driveQuery
                .createdAfter(rule.data.firstDate)
                .createdBefore(rule.data.secondDate);
              break;
          }
          break;
        case 'lastOpened':
          switch (rule.constraint) {
            case 'include':
              driveQuery = driveQuery.openedAfter(rule.data.date);
              break;
            case 'exclude':
              driveQuery = driveQuery.openedBefore(rule.data.date);
              break;
            case 'between':
              driveQuery = driveQuery
                .openedAfter(rule.data.firstDate)
                .openedBefore(rule.data.secondDate);
              break;
          }
          break;
        case 'lastModified':
          switch (rule.constraint) {
            case 'include':
              driveQuery = driveQuery.modifiedAfter(rule.data.date);
              break;
            case 'exclude':
              driveQuery = driveQuery.modifiedBefore(rule.data.date);
              break;
            case 'between':
              driveQuery = driveQuery
                .modifiedAfter(rule.data.firstDate)
                .modifiedBefore(rule.data.secondDate);
              break;
          }
          break;
      }
    });
    return driveQuery.get();
  }

  private getUntitledFiles(destination: GroupFolderInterface) {
    return new DriveQueryBuilder(destination.folderID, true)
      .nameContains('Untitled')
      .get();
  }

  loadConfig(cb?: Function): void {
    this.database.getActiveConfig().then(
      activeConfig => {
        if (activeConfig) {
          this.database.getConfig(activeConfig, config => {
            this.config = config;
            if (cb) {
              cb();
            }
          });
        }
      },
      err => {}
    );
  }

  sort() {
    return new Promise((resolve, reject) => {
      const drive = gapi.client.drive;
      const success = true;
      this.config.groups.forEach(group => {
        if (group.destination) {
          this.google.listFiles(this.getDriveQuery(group), resp => {
            if (resp.error) {
              reject(resp.error);
            } else {
              resp.files.forEach(file => {
                this.google.moveFile(
                  file.id,
                  group.destination.folderID,
                  moved => {
                    if (!moved) {
                      moved = false;
                    }
                  }
                );
              }, this);
            }
          });
          if (group.source.renameUntitled) {
            this.google.listFiles(this.getUntitledFiles(group.source), resp => {
              if (resp.error) {
                reject(resp.error);
              } else {
                resp.files.forEach(file => {
                  this.google.renameFile(file.id, Date());
                });
              }
            });
          }
        } else {
          const newFolderName = ConfigBuilder.folderNameBuilder(
            group.createFolder
          );
          this.google
            .createFolder(newFolderName, group.createFolder.parent.folderID)
            .then(newFolderID => {
              this.google.listFiles(this.getDriveQuery(group), resp => {
                if (resp.error) {
                  reject(resp.error);
                } else {
                  resp.files.forEach(file => {
                    this.google.moveFile(file.id, newFolderID, moved => {
                      if (!moved) {
                        moved = false;
                      }
                    });
                  }, this);
                }
              });
            }, err => console.error);
        }
      });
      if (success) {
        resolve();
      } else {
        reject();
      }
    });
  }
}
