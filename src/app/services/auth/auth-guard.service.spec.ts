import { TestBed, inject } from '@angular/core/testing';
import { RouterModule, Router } from '@angular/router';

// Servies
import { AuthGuardService } from './auth-guard.service';
import { GoogleService } from '../google/google.service';

import { appRoutes } from '../../app.routes';

// Modules
import { MatTableModule, MatPaginatorModule } from '@angular/material';

// Components
import { UnauthenticatedComponent } from '../../components/auth/unauthenticated/unauthenticated.component';
import { HomeComponent } from '../../components/tabs/home/home.component';
import { ConfigComponent } from '../../components/tabs/config/config.component';
import { SettingsComponent } from '../../components/tabs/settings/settings.component';
import { ConfigListComponent } from '../../components/tabs/config/config-list/config-list.component';

describe('AuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        UnauthenticatedComponent,
        HomeComponent,
        ConfigComponent,
        SettingsComponent,
        ConfigListComponent
      ],
      imports: [
        MatTableModule,
        MatPaginatorModule,
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
