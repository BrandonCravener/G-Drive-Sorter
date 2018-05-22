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
    // Check if config has name and groups
    if (!config.name || !config.groups || config.name.length <= 0) {
      valid = false;
    }
    config.groups.forEach(group => {
      if (
        !group.id ||
        !group.source.folderID ||
        !group.name ||
        !group.rules ||
        group.name.length <= 0
      ) {
        valid = false;
      }
      if (!group.createFolder) {
        valid = group.destination.folderID ? true : false;
      }
      group.rules.forEach(rule => {
        if (
          !rule.classifier ||
          !rule.constraint ||
          !rule.data ||
          !rule.id ||
          !rule.name ||
          rule.name.length <= 0
        ) {
          valid = false;
        }
      });
    });
    return valid;
  }

  static folderNameBuilder(createFolderConfig: FolderCreation): string {
    let outputString: string = '';
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
