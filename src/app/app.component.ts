import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { GoogleService } from './services/google/google.service';

import { routerAnimation } from '../router.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GoogleService],
  animations: [ routerAnimation ]
})
export class AppComponent {
  authenticated: Boolean;

  constructor(public google: GoogleService, public router: Router, public zone: NgZone) {
    const googleInitInterval = setInterval(() => {
      if (gapi) {
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
              this.router.navigate(['/app']);
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

  signOut() {
    this.google.signOut();
  }

  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.name;
  }

}
