import { APP_BASE_HREF } from '@angular/common';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { UnauthenticatedComponent } from './components/auth/unauthenticated/unauthenticated.component';

import { Parallax } from 'ngx-parallax';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule, MatTabsModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { appRoutes } from './app.routes';

import { GoogleService } from './services/google/google.service';
import { AuthGuardService, PreventAuthGuardService } from './services/auth/auth-guard.service';
import { HomeComponent } from './components/tabs/home/home.component';
import { ConfigComponent } from './components/tabs/config/config.component';
import { SettingsComponent } from './components/tabs/settings/settings.component';
describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        UnauthenticatedComponent,
        HomeComponent,
        ConfigComponent,
        SettingsComponent,
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
