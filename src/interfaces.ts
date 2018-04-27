import { AngularFirestoreCollection } from "angularfire2/firestore";

export interface ConfigInterface {
    activeConfig: string;
}

export interface ConfigsInterface {
    name: string,
    groups: Object
}

export interface UserDocument {
    configs: AngularFirestoreCollection<ConfigsInterface>,
    activeConfig: string
}