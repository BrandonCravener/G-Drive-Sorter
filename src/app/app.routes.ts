import { AuthGuardService as AuthGuard, PreventAuthGuardService as PreventAuthGuard } from './services/auth/auth-guard.service';
import { ConfigComponent } from './components/tabs/config/config.component';
import { EditConfigPageComponent } from './components/shared/edit-config-page/edit-config-page.component';
import { HomeComponent } from './components/tabs/home/home.component';
import { NewConfigPageComponent } from './components/shared/new-config-page/new-config-page.component';
import { Routes } from '@angular/router';
import { SettingsComponent } from './components/tabs/settings/settings.component';
import { UnauthenticatedComponent } from './components/auth/unauthenticated/unauthenticated.component';

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
    path: 'app/home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: {
      state: 'appHome'
    }
  },
  {
    path: 'app/config',
    component: ConfigComponent,
    canActivate: [AuthGuard],
    data: {
      state: 'appConfig'
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
    path: 'app/config/create',
    component: NewConfigPageComponent,
    canActivate: [AuthGuard],
    data: {
      state: 'appConfigCreate'
    }
  },
  {
    path: 'app/config/edit',
    component: EditConfigPageComponent,
    canActivate: [AuthGuard],
    data: {
      state: 'appConfigEdit'
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
];
