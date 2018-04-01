import { Routes } from '@angular/router';

import { UnauthenticatedComponent } from './components/auth/unauthenticated/unauthenticated.component';

import { AuthGuardService as AuthGuard, PreventAuthGuardService as PreventAuthGuard } from './services/auth/auth-guard.service';
import { HomeComponent } from './components/tabs/home/home.component';
import { ConfigComponent } from './components/tabs/config/config.component';
import { SettingsComponent } from './components/tabs/settings/settings.component';

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
    path: 'app/home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: {
      name: 'app/home'
    }
  },
  {
    path: 'app/config',
    component: ConfigComponent,
    canActivate: [AuthGuard],
    data: {
      name: 'app/config'
    }
  },
  {
    path: 'app/settings',
    component: SettingsComponent,
    canActivate: [AuthGuard],
    data: {
      name: 'app/settings'
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
];
