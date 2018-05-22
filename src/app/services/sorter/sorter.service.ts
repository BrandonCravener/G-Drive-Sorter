import { ConfigsInterface, GroupInterface } from '../../../interfaces';
import { DatabaseService } from '../firebase/database.service';
import {
  DriveMimeType,
  DriveQueryBuilder
} from '../../classes/drive-query-builder';
import { GoogleService } from '../google/google.service';
import { Injectable } from '@angular/core';
import { ConfigBuilder } from '../../classes/config-builder';

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
        case 'title':
          let title = rule.data.title;
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
          let type = rule.data.fileType;
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
          let owner = rule.data.owner;
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

  loadConfig(cb?: Function): void {
    this.database.getActiveConfig(activeConfig => {
      if (activeConfig) {
        this.database.getConfig(activeConfig, config => {
          this.config = config;
          if (cb) cb();
        });
      }
    });
  }

  sort() {
    return new Promise((resolve, reject) => {
      const drive = gapi.client.drive;
      let success = true;
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
                  success => {
                    if (!success) {
                      success = false;
                    }
                  }
                );
              }, this);
            }
          });
        } else {
          let newFolderName = ConfigBuilder.folderNameBuilder(
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
                    this.google.moveFile(file.id, newFolderID, success => {
                      if (!success) {
                        success = false;
                      }
                    });
                  }, this);
                }
              });
            }, err => console.error);
        }
      });
      if (success) resolve();
      else reject();
    });
  }
}
