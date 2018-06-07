export interface Config {
  name: String;
  key: String;
}

export interface ConfigInterface {
  activeConfig: string;
}

export interface RuleInterface {
  id: string;
  name: string;
  data?: any;
  classifier?: string;
  constraint?: string;
}

export interface GroupFolderInterface {
  name?: string;
  renameUntitled?: boolean;
  folderID?: string;
}

export interface FolderCreation {
  parent: {
    folderID: string | undefined;
    name: string | null;
  };
  prefix: {
    type: string | null;
    value: string;
  };
  name: {
    type: string | null;
    value: string;
  };
  suffix: {
    type: string | null;
    value: string;
  };
}

export interface GroupInterface {
  id: string;
  name: string;
  rules: Array<RuleInterface>;
  source: GroupFolderInterface;
  destination?: GroupFolderInterface;
  createFolder?: FolderCreation;
}

export interface ConfigsInterface {
  id: string;
  name: string;
  groups: Array<GroupInterface>;
}

export interface JSONConfiguration {
  configs: Array<ConfigsInterface>;
  activeConfig: string;
}
