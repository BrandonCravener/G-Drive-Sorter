import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { gapi } from 'gapi-client';

@Injectable()
export class GoogleService {

  config: Object;
  authState: Observable<any>;

  constructor (config: Object) {
    this.config = config;
  }

  init() {
    gapi.load('client:auth2', () => {
      gapi.client
      .init(this.config)
      .then(() => {
        this.authState = new Observable(observer => {
          const {
            next,
            error
          } = observer;
          const authInstance = gapi.auth2.getAuthInstance();
          if (authInstance) {
            authInstance.isSignedIn.listen(next);
          }
          return;
        });

        gapi.load('picker', () => {
          const view = new gapi.picker.DocsView(gapi.picker.ViewId.FOLDERS)
          .setIncludeFolders(true)
          .setSelectFolderEnabled(true);
        });
      }, console.error);
    });
  }
}
