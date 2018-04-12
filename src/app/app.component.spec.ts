import { APP_BASE_HREF } from '@angular/common';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { UnauthenticatedComponent } from './components/auth/unauthenticated/unauthenticated.component';

import { Parallax } from 'ngx-parallax';

// Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule, MatTabsModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AuthenticatedModule } from './modules/authenticated/authenticated.module';

// Angularfire
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// Utilitys
import { appRoutes } from './app.routes';
import { environment } from '../environments/environment';

// Services
import { GoogleService } from './services/google/google.service';
import { AuthGuardService, PreventAuthGuardService } from './services/auth/auth-guard.service';

// Components
import { HomeComponent } from './components/tabs/home/home.component';
import { ConfigComponent } from './components/tabs/config/config.component';
import { SettingsComponent } from './components/tabs/settings/settings.component';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        UnauthenticatedComponent,
        Parallax
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatTabsModule,
        RouterModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFirestoreModule,
        AuthenticatedModule.forRoot(),
        RouterModule.forRoot(
          appRoutes
        )
      ],
      providers: [GoogleService, AuthGuardService, PreventAuthGuardService, {provide: 
        APP_BASE_HREF, 
        useValue: '/'
      }]
    }).compileComponents();
  });
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
