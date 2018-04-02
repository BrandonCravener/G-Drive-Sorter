import { Component, OnInit, ViewChild } from '@angular/core';

import { GoogleService } from '../../../services/google/google.service';

/**
 * Declare the component to be shown when the user isn't authenticated.
 * 
 * @export
 * @class UnauthenticatedComponent
 */
@Component({
  selector: 'app-unauthenticated',
  templateUrl: './unauthenticated.component.html',
  styleUrls: ['./unauthenticated.component.css']
})
export class UnauthenticatedComponent {
  /**
   * Creates an instance of UnauthenticatedComponent.
   * @param {GoogleService} google Declare the Google Service as google.
   * @memberof UnauthenticatedComponent
   */
  constructor(public google: GoogleService) { }
  
  /**
   * Method to log the user in.
   * 
   * @memberof UnauthenticatedComponent
   */
  login() {
    this.google.signIn();
  }

}
