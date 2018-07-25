import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { DriveMimeType } from '../../classes/drive-query-builder';
import { DatabaseService } from '../database/database.service';

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

const _folderPicked = new Subject<any>();

function folderPicked(data: any): void {
  if (data.action === 'picked') {
    _folderPicked.next(data.docs[0]);
  } else if (data.action === 'cancel') {
    _folderPicked.error(true);
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
  constructor(
    private database: DatabaseService
  ) {}

  /**
   * Initialize the Google API
   *
   * @param {Object} config
   * @memberof GoogleService
   */
  init(config: Object, callback?: Function) {
    gapi.load('client:auth2', () => {
      gapi.client.init(config).then(() => {
        authInstance = gapi.auth2.getAuthInstance();
        authInstance.isSignedIn.listen(() => {
          this._authState.next(authInstance.isSignedIn.get());
        });
        const authStatus = authInstance.isSignedIn.get();
        this._authState.next(authStatus);
        gapi.load('picker', () => {
          const view = new google.picker.DocsView(google.picker.ViewId.FOLDERS)
            .setIncludeFolders(true)
            .setSelectFolderEnabled(true)
            .setParent('root')
            .setOwnedByMe(true);

          folderPicker = new google.picker.PickerBuilder()
            .disableFeature(google.picker.Feature.SUPPORT_TEAM_DRIVES)
            .setAppId(362606538820)
            .setOAuthToken(
              authInstance.currentUser.get().getAuthResponse().access_token
            )
            .setDeveloperKey('AIzaSyB-yE9IXT29Vl_eAU7bzvzv5Qe17flfpzM')
            .setSelectableMimeTypes('application/vnd.google-apps.folder')
            .addView(view)
            .setCallback(folderPicked)
            .build();
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
  signIn(): void {
    authInstance.signIn();
  }

  /**
   * Signs a user out
   *
   * @memberof GoogleService
   */
  signOut(): void {
    authInstance.signOut();
    this.database.initalized = false;
  }

  listFiles(query: string, cb: Function): void {
    gapi.client.drive.files
      .list({
        q: query
      })
      .execute(resp => {
        cb(resp);
      });
  }

  getFileInfo(fileID: string, fields: string, cb: Function): void {
    gapi.client.drive.files
      .get({
        fileId: fileID,
        fields: fields
      })
      .execute(resp => {
        if (resp.err) {
          console.error(resp.err);
        } else {
          cb(resp);
        }
      });
  }

  createFolder(name: string, parent?: string): Promise<string> {
    const fileResource = {
      name: name,
      mimeType: DriveMimeType.folder
    };
    if (parent) { fileResource['parents'] = [parent]; }
    return new Promise((resolve, reject) => {
      gapi.client.drive.files
        .create({
          resource: fileResource,
          fields: 'id'
        })
        .execute(resp => {
          if (resp.err) { reject(resp.err); } else { resolve(resp.id); }
        });
    });
  }

  renameFile(fileID: string, name: string) {
    return new Promise((resolve, reject) => {
      gapi.client.drive.files.update({
        'fileId': fileID,
        'resource': {
          'name': name
        }
      }).execute(resp => {
        if (resp.err) { reject(resp.err); } else { resolve(); }
      });
    });
  }

  moveFile(fileID: string, folder: string, cb: Function): void {
    this.getFileInfo(fileID, 'parents', file => {
      const prevParents = file.parents.join(',');
      gapi.client.drive.files
        .update({
          fileId: fileID,
          addParents: folder,
          removeParents: prevParents
        })
        .execute(resp => {
          if (resp.err) {
            console.error(resp.err);
          } else {
            cb(true);
          }
        });
    });
  }
}
