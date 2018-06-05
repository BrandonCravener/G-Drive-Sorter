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
        q: "name = 'configuration.json'",
        spaces: 'appDataFolder',
        fields: 'files(id)'
      })
      .then(response => {
        if (response.result.files.length > 0) {
          this.configID = response.result.files[0].id;
        } else {
          gapi.client.drive.files
            .create({
              fields: 'id',
              resource: {
                name: 'configuration.json',
                parents: ['appDataFolder']
              }
            })
            .then(response => {
              this.configID = response.result.id;
            }, err => console.error);
        }
      }, err => console.error);
    this.initalized = true;
  }

  /*
    Configuration functions
  */
  private updateConfiguration() {}
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
  }

  addConfig(config: ConfigsInterface): Promise<void> {
    return new Promise((resolve, reject) => {
      this.configuration.configs.push(config);
      resolve();
    });
  }

  updateConfig(newConfig: ConfigsInterface): void {
    this.configuration.configs.forEach(config => {
      if (config.id === this.editingConfig) {
        config = newConfig;
        this.editingConfig = '';
        this._configSubject.next(true);
      }
    });
  }

  getConfig(configID: string, cb: Function): void {
    let configs = this.configuration.configs;
    cb(
      configs.find(config => {
        return config.id === configID;
      })
    );
  }

  deleteConfig(configID: string): void {
    let configIndex = this.configs.findIndex(config => {
      return config.id === configID;
    });
    this.configuration.configs.splice(configIndex, 1);
  }

  clearConfigs(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.configuration.configs) this.configuration.configs = [];
      if (this.configuration.activeConfig)
        this.configuration.activeConfig = null;
      resolve();
    });
  }

  setActiveConfig(configID: string): void {
    this.configuration.activeConfig = configID;
  }

  getActiveConfig(): Promise<string> {
    return new Promise((resolve, reject) => {
      if (
        this.configuration.activeConfig &&
        this.configuration.activeConfig.length > 0
      )
        resolve(this.configuration.activeConfig);
      else reject('No active config');
    });
  }

  getConfigs(): Array<ConfigsInterface> {
    return this.configuration.configs;
  }

  numberConfigs(): Promise<number> {
    return new Promise((resolve, reject) => {
      if (this.configuration.configs)
        resolve(this.configuration.configs.length);
      else resolve(0);
    });
  }
}
