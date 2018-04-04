import { Component, NgZone, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { GoogleService } from './services/google/google.service';

import { routerAnimation } from '../router.animations';

/**
 * Workaround for testing
 */
declare var gapi: any;
/**
 * Base application component.
 * 
 * @export
 * @class AppComponent
 * @implements {AfterViewInit}
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ GoogleService ],
  animations: [ routerAnimation ]
})
export class AppComponent implements AfterViewInit {
  /**
   * Checks if the view has initalized yet.
   * 
   * @private
   * @type {boolean}
   * @memberof AppComponent
   */
  private rlaSafe: boolean = false;
  /**
   * Hold the users authenitcation status
   * 
   * @type {Boolean}
   * @memberof AppComponent
   */
  authenticated: Boolean;

  /**
   * An array of links thats translated into tabs.
   * 
   * @memberof AppComponent
   */
  tabLinks = [
    {
      path: 'app/home',
      label: 'Home'
    },
    {
      path: 'app/config',
      label: 'Configuration'
    },
    {
      path: 'app/settings',
      label: 'Settings'
    }
  ];
  /**
   * Creates an instance of AppComponent.
   * @param {GoogleService} google Declare the Google Service as google
   * @param {Router} router Declare the Router as router
   * @param {NgZone} zone  Declare NgZone as zon
   * @memberof AppComponent
   */
  constructor(public google: GoogleService, public router: Router, public zone: NgZone) {
    const googleInitInterval = setInterval(() => {
      if (window['gapi']) {
        this.google.init({
          apiKey: 'AIzaSyB-yE9IXT29Vl_eAU7bzvzv5Qe17flfpzM',
          clientId: '362606538820-om1dhhvv5d9npas7jj02mbtvi5mjksmo.apps.googleusercontent.com',
          discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
          scope: 'https://www.googleapis.com/auth/drive'
        });
        this.google.authState$.subscribe(state => {
          this.authenticated = state;
          if (state) {
            this.zone.run(() => {
              this.router.navigate(['/app/home']);
            });
          } else {
            this.zone.run(() => {
              this.router.navigate(['/']);
            });
          }
        });
        clearInterval(googleInitInterval);
      }
    }, 250);
  }
  /**
   * Called after the view is initalized.
   * 
   * @memberof AppComponent
   */
  public ngAfterViewInit() {
    this.rlaSafe = true;
  }
  
  /**
   * Signs the user out.
   * 
   * @memberof AppComponent
   */
  signOut() {
    this.google.signOut();
  }
  
  /**
   * Gets the current route information.
   * 
   * @param {any} outlet The route
   * @returns 
   * @memberof AppComponent
   */
  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.name;
  }

}
