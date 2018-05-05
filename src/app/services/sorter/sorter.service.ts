import { ConfigInterface } from '../../../interfaces';
import { DatabaseService } from '../firebase/database.service';
import { DriveMimeType, DriveQueryBuilder } from '../../classes/drive-query-builder';
import { GoogleService } from '../google/google.service';
import { Injectable } from '@angular/core';

@Injectable()
export class SorterService {

  config: ConfigInterface;

  constructor(
    private google: GoogleService,
    private database: DatabaseService
  ) {
    this.loadConfig(() => {
      console.log(this.config);
    });
    this.database.activeConfigChanged.subscribe(() => {
      this.loadConfig(() => {
        console.log(this.config)
      });
    })
  }

  loadConfig(cb?: Function): void {
    this.database.getActiveConfig(activeConfig => {
      if (activeConfig) {
        this.database.getConfig(activeConfig, config => {
          this.config = config;
          if (cb) cb();
        })
      }
    })
  }

  test() {
  }

}
