import { TestBed, inject } from '@angular/core/testing';
import { RouterModule, Router } from '@angular/router';

import { AuthGuardService } from './auth-guard.service';
import { GoogleService } from '../google/google.service';

import { appRoutes } from '../../app.routes';

import { UnauthenticatedComponent } from '../../components/auth/unauthenticated/unauthenticated.component';
import { HomeComponent } from '../../components/tabs/home/home.component';
import { ConfigComponent } from '../../components/tabs/config/config.component';
import { SettingsComponent } from '../../components/tabs/settings/settings.component';

describe('AuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        UnauthenticatedComponent,
        HomeComponent,
        ConfigComponent,
        SettingsComponent
      ],
      imports: [ 
        RouterModule.forRoot(
          appRoutes
        )
      ],
      providers: [ 
        {
          provide: Router,
          useClass: class { navigate = jasmine.createSpy("navigate"); }
        }, 
        GoogleService, 
        AuthGuardService 
      ],
    });
  });

  it('should be created', inject([AuthGuardService], (service: AuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
