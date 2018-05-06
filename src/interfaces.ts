import { AngularFirestoreCollection } from 'angularfire2/firestore';

export interface ConfigInterface {
    activeConfig: string;
}

export interface RuleInterface {
    id: string,
    name: string,
    data?: any,
    classifier?: string,
    constraint?: string
}

export interface GroupFolderInterface {
    name?: string,
    folderID?: string
}

export interface GroupInterface {
    id: string,
    name: string,
    rules: Array<RuleInterface>,
    source: GroupFolderInterface,
    destination: GroupFolderInterface
}

export interface ConfigsInterface {
    id: string,
    name: string,
    groups: Array<GroupInterface>
}

export interface UserDocument {
    activeConfig: string,
    configs: AngularFirestoreCollection<ConfigsInterface>
}