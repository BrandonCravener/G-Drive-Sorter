// Angular imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material imports
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule, MatIconModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatDialogModule } from '@angular/material';

// AngularFire imports
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Route imports
import { appRoutes } from './app.routes';

import { environment } from '../environments/environment.prod';

// Component imports
import { AppComponent } from './app.component';
import { ParallaxModule, ParallaxConfig } from 'ngx-parallax';
import { UnauthenticatedComponent } from './components/auth/unauthenticated/unauthenticated.component';

// Module imports
import { AuthenticatedModule } from './modules/authenticated/authenticated.module';

// Service imports
import { GoogleService } from './services/google/google.service';
import { AuthGuardService, PreventAuthGuardService } from './services/auth/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    UnauthenticatedComponent
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    ParallaxModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    RouterModule.forRoot(
      appRoutes
    ),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    AuthenticatedModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [GoogleService, AuthGuardService, PreventAuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
