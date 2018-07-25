import { AfterViewInit, Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AngularOnboardingService } from 'angular-onboarding';
import { Subject } from 'rxjs';

import { fabAnimation, routerAnimation } from '../animations';
import { DatabaseService } from './services/database/database.service';
import { GoogleService } from './services/google/google.service';

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
  styleUrls: ['./app.component.scss'],
  providers: [GoogleService],
  animations: [routerAnimation, fabAnimation]
})
export class AppComponent implements AfterViewInit {
  @ViewChild('routerOutlet', { read: ElementRef }) routerOutlet: ElementRef;

  private loaderRemoved: Boolean = false;
  private openConfigModal: Subject<boolean> = new Subject<boolean>();

  public loaded = false;
  public showTour = true;
  public rlaSafe = false;
  public tabsEnabled = true;
  public authenticated: Boolean;
  public createConfigButtonState = 'inactive';
  public openConfigModal$ = this.openConfigModal.asObservable();
  public tabLinks = [
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
  constructor(
    public aoService: AngularOnboardingService,
    private database: DatabaseService,
    private google: GoogleService,
    private router: Router,
    private zone: NgZone
  ) {
    const googleInitInterval = setInterval(() => {
      aoService.navigateSubject.subscribe(path => {
        router.navigateByUrl(path);
      });
      if (window['gapi']) {
        this.google.init({
          apiKey: 'AIzaSyB-yE9IXT29Vl_eAU7bzvzv5Qe17flfpzM',
          clientId:
            '362606538820-om1dhhvv5d9npas7jj02mbtvi5mjksmo.apps.googleusercontent.com',
          discoveryDocs: [
            'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'
          ],
          scope:
            'https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.appdata'
        });
        this.google.authState$.subscribe(state => {
          if (!this.loaderRemoved) {
            this.loaded = true;
            setTimeout(() => {
              document.getElementById('loader').remove();
              this.loaderRemoved = true;
            }, 500);
          }
          this.authenticated = state;
          if (state) {
            this.database.initalize();
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
    // Listen for route changes
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/app/config') {
          this.createConfigButtonState = 'active';
        } else {
          this.createConfigButtonState = 'inactive';
        }
        if (
          event.url === '/app/config/create' ||
          event.url === '/app/config/presets' ||
          event.url === '/app/config/edit'
        ) {
          this.tabsEnabled = false;
        } else {
          this.tabsEnabled = true;
        }
      }
    });
  }

  signOut() {
    this.google.signOut();
  }

  signIn() {
    this.google.signIn();
  }

  openConfigModalFunc() {
    this.openConfigModal.next(true);
  }

  declineTutorial() {
    this.aoService.exit();
    this.showTour = false;
  }

  acceptTutorial() {
    this.aoService.start();
    this.showTour = false;
  }

  /**
   * Gets the current route information.
   *
   * @param {any} outlet The route
   * @returns
   * @memberof AppComponent
   */
  getRouteState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
