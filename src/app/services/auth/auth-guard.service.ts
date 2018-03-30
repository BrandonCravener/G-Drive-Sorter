import { Injectable, NgZone } from '@angular/core';

import { GoogleService } from '../google/google.service';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public google: GoogleService, public router: Router, public zone: NgZone) { }

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


@Injectable()
export class PreventAuthGuardService implements CanActivate {

  constructor(public google: GoogleService, public router: Router, public zone: NgZone) { }

  canActivate(): boolean {
    if (!this.google.getAuthStatus()) {
      return true;
    }
    this.zone.run(() => {
      this.router.navigate(['/app']);
    });
    return false;
  }
}
