import { CanActivate, Router } from '@angular/router';
import { GoogleService } from '../google/google.service';
import { Injectable, NgZone } from '@angular/core';

/**
 * Prevent a user from accessing a route if they aren't authenticated.
 *
 * @export
 * @class AuthGuardService
 * @implements {CanActivate}
 */
@Injectable()
export class AuthGuardService implements CanActivate {
/**
 * Creates an instance of AuthGuardService.
 * @param {GoogleService} google Declare the Google Service as google.
 * @param {Router} router Declare the Router as router
 * @param {NgZone} zone Declare NgZone as zone
 * @memberof AuthGuardService
 */
constructor(public google: GoogleService, public router: Router, public zone: NgZone) { }
  /**
   * Determines whether the user can go to the page and handle it.
   *
   * @returns {boolean} Whether or not the user can access the route
   * @memberof AuthGuardService
   */
  canActivate(): boolean {
    if (this.google.getAuthStatus()) {
      return true;
    }
    this.zone.run(() => {
      this.router.navigate(['/']);
    });
    return false;
  }
}

/**
 * Prevent a user from accessing a route if they are authenticated.
 *
 * @export
 * @class PreventAuthGuardService
 * @implements {CanActivate}
 */
@Injectable()
export class PreventAuthGuardService implements CanActivate {
/**
 * Creates an instance of PreventAuthGuardService.
 * @param {GoogleService} google Declare the Google Service as google.
 * @param {Router} router Declare the Router as router
 * @param {NgZone} zone Declare NgZone as zone
 * @memberof PreventAuthGuardService
 */
constructor(public google: GoogleService, public router: Router, public zone: NgZone) { }
  /**
   * Determines whether the user can go to the page and handle it.
   *
   * @returns {boolean} Whether or not the user can access the route
   * @memberof PreventAuthGuardService
   */
  canActivate(): boolean {
    if (!this.google.getAuthStatus()) {
      return true;
    }
    this.zone.run(() => {
      this.router.navigate(['/app/home']);
    });
    return false;
  }
}
