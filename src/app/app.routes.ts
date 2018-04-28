// Angular imports
import { Routes } from '@angular/router';


// Authguard imports
import { AuthGuardService as AuthGuard, PreventAuthGuardService as PreventAuthGuard } from './services/auth/auth-guard.service';

// Componet imports
import { HomeComponent } from './components/tabs/home/home.component';
import { ConfigComponent } from './components/tabs/config/config.component';
import { SettingsComponent } from './components/tabs/settings/settings.component';
import { NewConfigPageComponent } from './components/shared/new-config-page/new-config-page.component';
import { UnauthenticatedComponent } from './components/auth/unauthenticated/unauthenticated.component';
import { EditConfigPageComponent } from './components/shared/edit-config-page/edit-config-page.component';

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
      name: 'appHome'
    }
  },
  {
    path: 'app/config',
    component: ConfigComponent,
    canActivate: [AuthGuard],
    data: {
      name: 'appConfig'
    }
  },
  {
    path: 'app/settings',
    component: SettingsComponent,
    canActivate: [AuthGuard],
    data: {
      name: 'appSettings'
    }
  },
  {
    path: 'app/config/create',
    component: NewConfigPageComponent,
    canActivate: [AuthGuard],
    data: {
      name: 'appConfigCreate'
    }
  },
  {
    path: 'app/config/edit',
    component: EditConfigPageComponent,
    canActivate: [AuthGuard],
    data: {
      name: 'appConfigEdit'
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
];
