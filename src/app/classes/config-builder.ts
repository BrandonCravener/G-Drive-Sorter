import {
  ConfigInterface,
  ConfigsInterface,
  GroupFolderInterface,
  RuleInterface,
  FolderCreation
} from '../../interfaces';
import { v4 as uuid } from 'uuid';

export class ConfigBuilder {
  static generateNewConfig(
    configName: string,
    firstGroupName: string,
    sourceFolder: GroupFolderInterface,
    destinationFolder: GroupFolderInterface,
    createFolder: FolderCreation,
    firstGroupRule: RuleInterface
  ): ConfigsInterface {
    const configHolder: ConfigsInterface = {
      name: configName,
      groups: [
        {
          id: uuid(),
          name: firstGroupName,
          source: sourceFolder,
          rules: [firstGroupRule]
        }
      ],
      id: uuid()
    };
    if (createFolder) {
      configHolder.groups[0].createFolder = createFolder;
    } else {
      configHolder.groups[0].destination = destinationFolder;
    }
    return configHolder;
  }

  static addGroup(
    config: ConfigsInterface,
    newGroupName: string,
    newGroupDestination: GroupFolderInterface,
    newGroupSource: GroupFolderInterface,
    firstGroupRule: RuleInterface
  ): ConfigsInterface {
    const localConfig: ConfigsInterface = config;
    localConfig.groups.push({
      id: uuid(),
      name: newGroupName,
      source: newGroupSource,
      destination: newGroupDestination,
      rules: [firstGroupRule]
    });
    return localConfig;
  }

  static verifyConfig(config: ConfigsInterface): boolean {
    let valid = true;
    if (
      !config.groups ||
      !config.id ||
      !config.name ||
      config.name.length <= 0
    ) {
      valid = false;
    } else {
      config.groups.forEach(group => {
        if (group.createFolder) {
          if (
            !group.createFolder.name ||
            !group.createFolder.parent ||
            !group.createFolder.prefix ||
            !group.createFolder.suffix ||
            group.createFolder.name.value.length <= 0
          ) {
            valid = false;
          }
        } else {
          if (
            !group.destination.folderID ||
            group.destination.folderID === undefined
          ) {
            valid = false;
          }
        }
        if (
          !group.id ||
          !group.name ||
          !group.rules ||
          !group.source ||
          group.name.length <= 0 ||
          group.rules.length <= 0 ||
          group.source.folderID === undefined
        ) {
          valid = false;
        } else {
          group.rules.forEach(rule => {
            if (
              !rule.name ||
              !rule.id ||
              !rule.data ||
              !rule.constraint ||
              !rule.classifier
            ) {
              valid = false;
            }
          });
        }
      });
    }
    return valid;
  }

  static folderNameBuilder(createFolderConfig: FolderCreation): string {
    let outputString = '';
    switch (createFolderConfig.prefix.type) {
      case 'text':
        outputString += createFolderConfig.prefix.value;
        break;
      case 'date':
        outputString += Date();
        break;
    }
    switch (createFolderConfig.name.type) {
      case 'text':
        outputString += ` ${createFolderConfig.name.value}`;
        break;
      case 'date':
        outputString += ` ${Date()}`;
        break;
    }
    switch (createFolderConfig.suffix.type) {
      case 'text':
        outputString += ` ${createFolderConfig.suffix.value}`;
        break;
      case 'date':
        outputString += ` ${Date()}`;
        break;
    }
    return outputString;
  }

  static configFromGroup(groups, name: string): ConfigsInterface {
    return {
      id: uuid(),
      name: name,
      groups: groups
    };
  }
}
