import { Routes } from '@angular/router';

import { UnauthenticatedComponent } from './components/auth/unauthenticated/unauthenticated.component';
import { HomeComponent } from './components/tabs/home/home.component';
import { SettingsComponent } from './components/tabs/settings/settings.component';
import {
  AuthGuardService as AuthGuard,
  PreventAuthGuardService as PreventAuthGuard,
} from './services/auth/auth-guard.service';

export const appRoutes: Routes = [
  {
    path: '',
    component: UnauthenticatedComponent,
    canActivate: [PreventAuthGuard],
    data: {
      state: 'landing'
    }
  },
  {
    path: 'app/config',
    loadChildren: './modules/config/config.module#ConfigModule'
  },
  {
    path: 'app/home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: {
      state: 'appHome'
    }
  },
  {
    path: 'app/settings',
    component: SettingsComponent,
    canActivate: [AuthGuard],
    data: {
      state: 'appSettings'
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
];
