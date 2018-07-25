import { Component } from '@angular/core';

import { DatabaseService } from '../../../services/database/database.service';
import { GoogleService } from '../../../services/google/google.service';
import { AppComponent } from './../../../app.component';

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
    private app: AppComponent,
    private google: GoogleService,
    private database: DatabaseService,
  ) {}

  clearConfigs() {
    this.database.clearConfigs().catch(err => console.error);
  }

  resetTour() {
    this.app.showTour = true;
    this.app.aoService.reset();
  }

  deleteAccount() {
    this.resetTour();
    this.database.clearConfigs().then(() => {
      this.google.signOut();
    }, err => console.error);
  }
}
