import { ConfigBuilder } from '../../classes/config-builder';
import {
  ConfigInterface,
  ConfigsInterface,
  FolderCreation,
  GroupFolderInterface,
  JSONConfiguration,
  RuleInterface
} from '../../../interfaces';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * Workaround for testing
 */
declare var gapi: any;
declare var google: any;

@Injectable()
export class DatabaseService {
  private _activeConfigChanged = new Subject<string>();
  private _configSubject = new Subject<Boolean>();
  private configuration: JSONConfiguration = {
    configs: [],
    activeConfig: ''
  };
  private configID: string;

  public activeConfigChanged = this._activeConfigChanged.asObservable();
  public configSubject = this._configSubject.asObservable();
  public configs: Array<ConfigsInterface>;
  public editingConfig: string;
  public initalized = false;
  public userID: string;

  constructor() {}

  initalize(): void {
    gapi.client.drive.files
      .list({
        q: `name = 'configuration.json'`,
        spaces: 'appDataFolder',
        fields: 'files(id)'
      })
      .then(listResponse => {
        if (listResponse.result.files.length > 0) {
          this.configID = listResponse.result.files[0].id;
          this.updateLocalConfiguration();
        } else {
          gapi.client.drive.files
            .create({
              resource: {
                name: 'configuration.json',
                parents: ['appDataFolder']
              },
              fields: 'id'
            })
            .then(createResponse => {
              this.configID = createResponse.result.id;
              this.updateRemoteConfiguration().then(() => {
                this.updateLocalConfiguration();
              }, err => console.error);
            }, err => console.error);
        }
      }, err => console.error);
  }

  /*
  Configuration functions
  */
  private readConfiguration(fileID: string): Promise<any> {
    return new Promise((resolve, reject) => {
      gapi.client.drive.files
        .get({
          fileId: fileID,
          alt: 'media'
        })
        .then(response => {
          resolve(response);
        }, err => reject);
    });
  }
  private updateLocalConfiguration() {
    this.readConfiguration(this.configID).then(response => {
      this.configuration = JSON.parse(response.body);
      this.initalized = true;
    }, err => console.error);
  }
  private updateRemoteConfiguration(): Promise<void> {
    return new Promise((resolve, reject) => {
      gapi.client
        .request({
          path: `https://www.googleapis.com/upload/drive/v3/files/${
            this.configID
          }`,
          method: 'PATCH',
          params: {
            uploadType: 'media'
          },
          body: JSON.stringify(this.configuration)
        })
        .then(response => {
          resolve();
        }, err => reject);
    });
  }
  /*
  Config functions
  */
  createConfig(
    configName: string,
    firstGroupName: string,
    sourceLocation: GroupFolderInterface,
    destinationLocation: GroupFolderInterface,
    createFolder: FolderCreation,
    firstGroupRule: RuleInterface
  ): void {
    const newConfig = ConfigBuilder.generateNewConfig(
      configName,
      firstGroupName,
      sourceLocation,
      destinationLocation,
      createFolder,
      firstGroupRule
    );
    this.configuration.configs.push(newConfig);
    this._configSubject.next(true);
    this.updateRemoteConfiguration().catch(err => console.error);
  }

  addConfig(config: ConfigsInterface): Promise<void> {
    return new Promise((resolve, reject) => {
      this.configuration.configs.push(config);
      this.updateRemoteConfiguration().then(res => resolve, err => reject);
      resolve();
    });
  }

  updateConfig(newConfig: ConfigsInterface): void {
    this.configuration.configs.forEach(config => {
      if (config.id === this.editingConfig) {
        config = newConfig;
        this.editingConfig = '';
        this._configSubject.next(true);
        this.updateRemoteConfiguration().catch(err => console.error);
      }
    });
  }

  getConfig(configID: string, cb: Function): void {
    const configs = this.configuration.configs;
    cb(
      configs.find(config => {
        return config.id === configID;
      })
    );
  }

  deleteConfig(configID: string): void {
    const configIndex = this.configuration.configs.findIndex(config => {
      return config.id === configID;
    });
    this.configuration.configs.splice(configIndex, 1);
    this.updateRemoteConfiguration()
      .then(() => {
        this._configSubject.next(true);
      })
      .catch(err => {
        this._configSubject.next(false);
        console.error(err);
      });
  }

  clearConfigs(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.configuration.configs) {
        this.configuration.configs = [];
      }
      if (this.configuration.activeConfig) {
        this.configuration.activeConfig = '';
      }
      this.updateRemoteConfiguration().then(res => resolve, err => reject);
    });
  }

  setActiveConfig(configID: string): void {
    this.configuration.activeConfig = configID;
    this.updateRemoteConfiguration().then(
      () => {
        this._activeConfigChanged.next(configID);
      },
      err => {
        this._activeConfigChanged.error(err);
      }
    );
  }

  getActiveConfig(): Promise<string> {
    return new Promise((resolve, reject) => {
      if (
        this.configuration.activeConfig &&
        this.configuration.activeConfig.length > 0
      ) {
        resolve(this.configuration.activeConfig);
      } else {
        reject('No active config');
      }
    });
  }

  getConfigs(): Array<ConfigsInterface> {
    return this.configuration.configs;
  }

  numberConfigs(): Promise<number> {
    return new Promise((resolve, reject) => {
      if (this.configuration.configs) {
        resolve(this.configuration.configs.length);
      } else {
        resolve(0);
      }
    });
  }
}
