import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../../services/database/database.service';
import { GoogleService } from '../../../services/google/google.service';

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
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  /**
   * Creates an instance of SettingsComponent.
   * @memberof SettingsComponent
   */
  constructor(
    private google: GoogleService,
    private database: DatabaseService
  ) {}

  clearConfigs() {
    this.database.clearConfigs().catch(err => console.error);
  }

  deleteAccount() {
    this.database.clearConfigs().then(() => {
      this.google.signOut();
    }, err => console.error);
  }
}
