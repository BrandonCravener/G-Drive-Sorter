import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { ConfigBuilder } from '../../classes/config-builder';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DatabaseService {

  private _configSubject = new Subject<Boolean>();
  public configSubject = this._configSubject.asObservable();

  public userID: string;
  private configCollection;

  constructor(
    private firebase: AngularFirestore,
    private firebaseAuth: AngularFireAuth
  ) {
    if (this.firebaseAuth.auth.currentUser) {
      this.userID = firebaseAuth
        .auth
        .currentUser
        .uid;
        this.configCollection = firebase
          .doc(`users/${this.userID}`)
          .collection('configs');
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
      .configCollection
      .add(newConfig)
      .then(() => {
        this._configSubject.next(true);
      }, err => {
        this._configSubject.next(false);
      });
  }

  numberConfigs(
    cb: Function
  ) {
    this
      .configCollection
      .ref
      .get()
      .then(snapshot => {
        cb(snapshot.docs.length);
      })
  }
}
