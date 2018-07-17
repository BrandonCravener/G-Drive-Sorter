import { aoConfig } from './../consts';
import { AngularOnboardingModule } from 'angular-onboarding';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { AuthenticatedModule } from './modules/authenticated/authenticated.module';
import {
  AuthGuardService,
  PreventAuthGuardService
} from './services/auth/auth-guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ConfigModule } from './modules/config/config.module';
import { GoogleService } from './services/google/google.service';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatToolbarModule
} from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UnauthenticatedComponent } from './components/auth/unauthenticated/unauthenticated.component';
import { DatabaseService } from './services/database/database.service';

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
