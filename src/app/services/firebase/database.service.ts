import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { ConfigBuilder } from '../../classes/config-builder';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { UserDocument, ConfigsInterface, ConfigInterface } from '../../../interfaces';

@Injectable()
export class DatabaseService {

  private _configSubject = new Subject<Boolean>();
  public configSubject = this._configSubject.asObservable();

  private _activeConfigChanged = new Subject<string>();
  public activeConfigChanged = this._activeConfigChanged.asObservable();

  public userID: string;

  private configDocument: AngularFirestoreDocument<ConfigInterface>;
  private configsCollection: AngularFirestoreCollection<ConfigsInterface>;
  private userDoc: AngularFirestoreDocument<UserDocument>;
  

  constructor(
    private firebase: AngularFirestore,
    private firebaseAuth: AngularFireAuth
  ) {
    if (this.firebaseAuth.auth.currentUser) {
      this.userID = firebaseAuth
        .auth
        .currentUser
        .uid;
      this.userDoc = firebase.doc(`users/${this.userID}`);
      this.configDocument = firebase.doc(`users/${this.userID}/userData/config`);
      this.configsCollection = this.userDoc.collection<ConfigsInterface>('configs');
    }
  }

  createConfig(
    configName: string,
    firstGroupName: string,
    destinationLocation: string,
    firstGroupRule: object
  ): void {
    const newConfig = ConfigBuilder.generateNewConfig(
      configName,
      firstGroupName,
      destinationLocation,
      firstGroupRule
    );
    this
      .configsCollection
      .add(newConfig)
      .then(() => {
        this._configSubject.next(true);
      }, err => {
        console.error(err);
        this._configSubject.next(false);
      });
  }

  deleteConfig(configID: string): void {
    this
      .configsCollection
      .doc(configID)
      .delete()
      .then(() => {
        this._configSubject.next(true);
      }, err => {
        console.error(err);
        this._configSubject.next(false);
      })
  }

  setActiveConfig(configID: string): void {
    this
      .configDocument
      .set({
        activeConfig: configID
      })
      .then(() => {
        this._activeConfigChanged.next(configID);
      }, err => {
        console.error(err);
        this._activeConfigChanged.error(err);
      })
  }

  getActiveConfig(cb: Function): void {
    this
      .configDocument
      .ref
      .get()
      .then(snapshot => {
        cb(snapshot.data()['activeConfig']);
      }, err => console.error);
  }

  numberConfigs(cb: Function): void {
    this
      .configsCollection
      .ref
      .get()
      .then(snapshot => {
        cb(snapshot.docs.length);
      })
  }
}
