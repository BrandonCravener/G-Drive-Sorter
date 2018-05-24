import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { Component, OnInit } from '@angular/core';
import { GoogleService } from '../../../services/google/google.service';
import { DatabaseService } from '../../../services/firebase/database.service';

/**
 * Workaround for testing
 */
declare var gapi: any;

/**
 * Declare the component to be shown when the settings tab is selected.
 * 
 * @export
 * @class SettingsComponent
 */
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss', '../../../../simple-grid.scss']
})
export class SettingsComponent {
  /**
   * Creates an instance of SettingsComponent.
   * @memberof SettingsComponent
   */
  constructor(private firebase: AngularFirestore, private firebaseAuth: AngularFireAuth, private google: GoogleService,
  private database: DatabaseService) { }

  deleteAccount() {
    this
      .database
      .deleteUser();
    this
      .firebaseAuth
      .auth
      .currentUser
      .delete()
      .then(() => {
        this.google.signOut();
        }, err => console.error)
  }

}
