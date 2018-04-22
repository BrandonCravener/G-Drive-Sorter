import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from "firebase/app";
import "firebase/auth";

/**
 * Workaround for testing
 */
declare var gapi: any;

declare var google: any;

/**
 * Variable for easy reference to the authenitcation instance.
 */
let authInstance;

let folderPicker;

let _folderPicked = new Subject<any>();

function folderPicked(data: any): void {
  if (data.action === 'picked') {
    _folderPicked.next(data.docs[0]);
  }
}

/**
 * Utility class to handle all interacting with the Google API
 * 
 * @export
 * @class GoogleService
 */
@Injectable()
export class GoogleService {
  /**
   * Holds a subject that is used to update subscribers with the authentication status.
   * 
   * @private
   * @memberof GoogleService
   */
  private _authState = new Subject<Boolean>();

  /**
   * Allows other modules / services to subscribe to the authentication status.
   * 
   * @memberof GoogleService
   */
  public authState$ = this._authState.asObservable();

  public folderPicked$ = _folderPicked.asObservable();

  /**
   * Creates an instance of GoogleService.
   * @memberof GoogleService
   */
  constructor (private firebaseAuth: AngularFireAuth) {}

  /**
   * Initialize the Google API
   * 
   * @param {Object} config 
   * @memberof GoogleService
   */
  init(config: Object, callback?: Function) {
    gapi.load('client:auth2', () => {
      gapi
      .client
      .init(config)
      .then(() => {
        authInstance = gapi.auth2.getAuthInstance();
        authInstance.isSignedIn.listen(() => {
          this._authState.next(authInstance.isSignedIn.get());
          if (authInstance.isSignedIn.get()) {
            const credential = firebase.auth.GoogleAuthProvider.credential(this.getToken());
            this.firebaseAuth.auth.signInWithCredential(credential)
          }
        });
        const authStatus = authInstance.isSignedIn.get();
        this._authState.next(authStatus);
        gapi.load('picker', () => {
          const view = new google.picker.DocsView(google.picker.ViewId.FOLDERS)
            .setIncludeFolders(true)
            .setSelectFolderEnabled(true);

          folderPicker = new google.picker.PickerBuilder()
            .disableFeature(google.picker.Feature.SUPPORT_TEAM_DRIVES)
            .setAppId(362606538820)
            .setOAuthToken(authInstance.currentUser.get().getAuthResponse().access_token)
            .setDeveloperKey('AIzaSyB-yE9IXT29Vl_eAU7bzvzv5Qe17flfpzM')
            .setSelectableMimeTypes('application/vnd.google-apps.folder')
            .addView(view)
            .setCallback(folderPicked)
            .build()
          if (callback) {
            callback();
          }
        });
      }, console.error);
    });
  }

  openFilePicker() {
    folderPicker.setVisible(true);
  }

  /**
   * Returns the users current authentication status.
   * 
   * @returns {Boolean} 
   * @memberof GoogleService
   */
  getAuthStatus(): Boolean {
    if (authInstance) {
      return authInstance.isSignedIn.get();
    } else {
      return false;
    }
  }

  /**
   * Opens a popup allowing the user to sign in.
   * 
   * @memberof GoogleService
   */
  signIn() {
    authInstance.signIn();
  }
  
  /**
   * Signs a user out
   * 
   * @memberof GoogleService
   */
  signOut() {
    authInstance.signOut();
    this.firebaseAuth.auth.signOut();
  }

  /**
   * Gets the users id token
   * 
   * @returns {string} 
   * @memberof GoogleService
   */
  getToken(): string {
    return authInstance.currentUser.get().getAuthResponse().id_token;
  }

}
