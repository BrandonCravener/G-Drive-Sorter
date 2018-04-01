import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

declare var gapi : any;

let authInstance;

@Injectable()
export class GoogleService {

  private _authState = new Subject<Boolean>();

  public authState$ = this._authState.asObservable();

  constructor () {
  }

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

  getAuthStatus() {
    if (authInstance) {
      return authInstance.isSignedIn.get();
    } else {
      return false;
    }
  }

  signIn() {
    authInstance.signIn();
  }

  signOut() {
    authInstance.signOut();
  }

}
