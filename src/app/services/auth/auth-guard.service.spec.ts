import { TestBed, inject } from '@angular/core/testing';
import { RouterModule, Router } from '@angular/router';

// Servies
import { AuthGuardService } from './auth-guard.service';
import { GoogleService } from '../google/google.service';

// Utils
import { appRoutes } from '../../app.routes';
import { environment } from '../../../environments/environment';

// Modules
import { MatTableModule, MatPaginatorModule, MatIconModule } from '@angular/material';

// Components
import { UnauthenticatedComponent } from '../../components/auth/unauthenticated/unauthenticated.component';
import { HomeComponent } from '../../components/tabs/home/home.component';
import { ConfigComponent } from '../../components/tabs/config/config.component';
import { SettingsComponent } from '../../components/tabs/settings/settings.component';
import { ConfigListComponent } from '../../components/tabs/config/config-list/config-list.component';

// Angularfire
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

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
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFirestoreModule,
        MatTableModule,
        MatPaginatorModule,
        MatIconModule,
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
