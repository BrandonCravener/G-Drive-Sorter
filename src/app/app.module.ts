// Angular imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material imports
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule, MatIconModule } from '@angular/material';

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

// Service imports
import { GoogleService } from './services/google/google.service';
import { AuthGuardService, PreventAuthGuardService } from './services/auth/auth-guard.service';
import { AuthenticatedModule } from './modules/authenticated/authenticated.module';


@NgModule({
  declarations: [
    AppComponent,
    UnauthenticatedComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    ParallaxModule,
    AuthenticatedModule.forRoot(),
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [GoogleService, AuthGuardService, PreventAuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
