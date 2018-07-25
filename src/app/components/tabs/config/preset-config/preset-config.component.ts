import { Component, NgZone, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { v4 as uuid } from 'uuid';

import { ConfigBuilder } from '../../../../classes/config-builder';
import { DatabaseService } from '../../../../services/database/database.service';
import { GoogleService } from '../../../../services/google/google.service';
import { presets } from '../presets';

@Component({
  selector: 'app-preset-config',
  templateUrl: './preset-config.component.html',
  styleUrls: ['./preset-config.component.scss']
})
export class PresetConfigComponent implements OnInit {
  private _closeCommand = new Subject<Boolean>();

  public closeCommand = this._closeCommand.asObservable();

  public isPage = false;
  public presets = presets;
  public creationEnabled = true;

  constructor(
    public zone: NgZone,
    public router: Router,
    private snackbar: MatSnackBar,
    private google: GoogleService,
    private database: DatabaseService
  ) {}

  ngOnInit() {}

  close() {
    this._closeCommand.next(true);
  }

  addPreset(presetID: string) {
    const config = presets.find(element => {
      return element.id === presetID;
    });
    const createFolders = config.data.createFolders;
    const groups = config.data.groups;
    const createdFolders = [];
    let requestsSent = 0;
    let requestsRecived = 0;
    this.creationEnabled = false;
    createFolders.forEach(folder => {
      requestsSent += 1;
      this.google
        .createFolder(folder)
        .then(id => {
          requestsRecived += 1;
          const foundGroup = groups.find(group => {
            return group.destination.presetID === folder;
          });
          foundGroup.destination = {
            folderID: id,
            name: folder
          };
        })
        .catch(err => console.error);
    });
    const checkInterval = setInterval(() => {
      if (requestsSent === requestsRecived) {
        clearInterval(checkInterval);
        groups.forEach(group => {
          group['id'] = uuid();
          group.rules.forEach(rule => {
            rule['id'] = uuid();
          });
        });
        this.database
          .addConfig(ConfigBuilder.configFromGroup(groups, 'I-STEM'))
          .then(
            () => {
              this.close();
              this.creationEnabled = true;
            },
            err => {
              this.snackbar.open('There was a problem adding your preset!');
              this.creationEnabled = true;
            }
          );
      }
    }, 100);
  }
}
