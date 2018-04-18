// Angular imports
import { Routes } from '@angular/router';


// Authguard imports
import { AuthGuardService as AuthGuard, PreventAuthGuardService as PreventAuthGuard } from './services/auth/auth-guard.service';

// Componet imports
import { HomeComponent } from './components/tabs/home/home.component';
import { ConfigComponent } from './components/tabs/config/config.component';
import { SettingsComponent } from './components/tabs/settings/settings.component';
import { NewRulePageComponent } from './components/shared/new-rule-page/new-rule-page.component';
import { UnauthenticatedComponent } from './components/auth/unauthenticated/unauthenticated.component';

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
    component: NewRulePageComponent,
    canActivate: [AuthGuard],
    data: {
      name: 'appConfigCreate'
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
];
