import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

/**
 * Workaround for testing
 */
declare var gapi: any;

/**
 * Variable for easy reference to the authenitcation instance.
 */
let authInstance;

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

  /**
   * Creates an instance of GoogleService.
   * @memberof GoogleService
   */
  constructor () {
  }

  /**
   * Initialize the Google API
   * 
   * @param {Object} config 
   * @memberof GoogleService
   */
  init(config: Object) {
    gapi.load('client:auth2', () => {
      gapi
      .client
      .init(config)
      .then(() => {
        authInstance = gapi.auth2.getAuthInstance();
        authInstance.isSignedIn.listen(() => {
          this._authState.next(authInstance.isSignedIn.get());
        });
        const authStatus = authInstance.isSignedIn.get();
        this._authState.next(authStatus);
      }, console.error);
    });
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
