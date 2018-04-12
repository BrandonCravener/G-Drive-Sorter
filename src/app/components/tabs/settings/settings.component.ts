import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase/app';
import { FirebaseService } from '../../../services/firebase/firebase.service';
import { GoogleService } from '../../../services/google/google.service';

/**
 * Declare the component to be shown when the settings tab is selected.
 * 
 * @export
 * @class SettingsComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss', '../../../../simple-grid.scss']
})
export class SettingsComponent implements OnInit {
  /**
   * Creates an instance of SettingsComponent.
   * @memberof SettingsComponent
   */
  constructor() { }

  /**
   * Handle component initalization
   * 
   * @memberof SettingsComponent
   */
  ngOnInit() {
    // variables
    let deleteAccountButton = document.getElementById('delete-account-button');
    let user = auth().currentUser;

    function deleteAccount() {
      user.delete().then(function() {
        // User deleted.
      }).catch(function(error) {
        // An error happened.
      });
      gapi.auth.signOut();
    }

    deleteAccountButton.addEventListener("click", deleteAccount);
  }

}
