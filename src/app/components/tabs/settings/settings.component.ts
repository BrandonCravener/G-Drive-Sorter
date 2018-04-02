import { Component, OnInit } from '@angular/core';

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
  styleUrls: ['./settings.component.scss']
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
  }

}
