import { NgModule } from '@angular/core';
import { MatDialogModule, MatIconModule, MatInputModule, MatToolbarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AngularOnboardingModule } from 'angular-onboarding';

import { aoConfig } from './../consts';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { UnauthenticatedComponent } from './components/auth/unauthenticated/unauthenticated.component';
import { AuthenticatedModule } from './modules/authenticated/authenticated.module';
import { ConfigModule } from './modules/config/config.module';
import { AuthGuardService, PreventAuthGuardService } from './services/auth/auth-guard.service';
import { DatabaseService } from './services/database/database.service';
import { GoogleService } from './services/google/google.service';

@NgModule({
  declarations: [AppComponent, UnauthenticatedComponent],
  imports: [
    BrowserModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    ConfigModule.forRoot(),
    BrowserAnimationsModule,
    AuthenticatedModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    AngularOnboardingModule.forRoot(aoConfig)
  ],
  providers: [
    DatabaseService,
    GoogleService,
    AuthGuardService,
    PreventAuthGuardService,
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
