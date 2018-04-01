import { Component, NgZone, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { GoogleService } from './services/google/google.service';

import { routerAnimation } from '../router.animations';

declare var gapi: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GoogleService],
  animations: [ routerAnimation ]
})
export class AppComponent implements AfterViewInit {
  private rlaSafe: boolean = false;
  
  authenticated: Boolean;


  
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
  
  public ngAfterViewInit() {
    this.rlaSafe = true;
  }
  
  signOut() {
    this.google.signOut();
  }
  
  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.name;
  }

}
