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

  private configCollection: AngularFirestoreCollection<ConfigInterface>;
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
      this.configsCollection = this.userDoc.collection<ConfigsInterface>('configs');
      this.configCollection = this.userDoc.collection<ConfigInterface>('config');
    }
  }

  createConfig(
    configName: string,
    firstGroupName: string, 
    firstGroupRule: object
  ) {
    const newConfig = ConfigBuilder.generateNewConfig(
      configName,
      firstGroupName,
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

  deleteConfig(
    configID: string
  ) {
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

  setActiveConfig(
    configID: string
  ) {
    this
      .configCollection
      .doc('activeConfig')
      .set(configID)
      .then(() => {
        this._activeConfigChanged.next(configID);
      }, err => {
        console.error(err);
        this._activeConfigChanged.error(err);
      })
  }

  getActiveConfig(cb: Function): void {
    this
      .configCollection
      .doc('activeConfig')
      .ref
      .get()
      .then(snapshot => {
        cb(snapshot.data());
      }, err => {
        console.error(err);
      })
  }

  numberConfigs(
    cb: Function
  ) {
    this
      .configsCollection
      .ref
      .get()
      .then(snapshot => {
        cb(snapshot.docs.length);
      })
  }
}
