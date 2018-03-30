import { Routes } from '@angular/router';

import { AuthenticatedComponent } from './components/auth/authenticated/authenticated.component';
import { UnauthenticatedComponent } from './components/auth/unauthenticated/unauthenticated.component';

import { AuthGuardService as AuthGuard, PreventAuthGuardService as PreventAuthGuard } from './services/auth/auth-guard.service';

export const appRoutes: Routes = [
  {
    path: '',
    component: UnauthenticatedComponent,
    canActivate: [PreventAuthGuard],
    data: {
      name: 'landing'
    }
  },
  {
    path: 'app',
    component: AuthenticatedComponent,
    canActivate: [AuthGuard],
    data: {
      name: 'app'
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
];
