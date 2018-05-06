import {
    ConfigInterface,
    ConfigsInterface,
    GroupFolderInterface,
    RuleInterface
    } from '../../interfaces';
import { v4 as uuid } from 'uuid';

export class ConfigBuilder {
  static generateNewConfig(
    configName: string,
    firstGroupName: string,
    sourceFolder: GroupFolderInterface,
    destinationFolder: GroupFolderInterface,
    firstGroupRule: RuleInterface
  ): ConfigsInterface {
    const configHolder: ConfigsInterface = {
      name: configName,
      groups: [
        {
          id: uuid(),
          name: firstGroupName,
          source: sourceFolder,
          destination: destinationFolder,
          rules: [firstGroupRule]
        }
      ],
      id: uuid()
    };
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
        !group.destination.folderID ||
        !group.id ||
        !group.source.folderID ||
        !group.name ||
        !group.rules ||
        group.name.length <= 0
      ) {
        valid = false;
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
}
