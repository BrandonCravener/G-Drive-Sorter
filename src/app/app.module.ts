import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
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
import { environment } from '../environments/environment.prod';
import { GoogleService } from './services/google/google.service';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatStepperModule,
  MatToolbarModule
} from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { ParallaxConfig, ParallaxModule } from 'ngx-parallax';
import { RouterModule, Routes } from '@angular/router';
import { UnauthenticatedComponent } from './components/auth/unauthenticated/unauthenticated.component';
import { FolderCreationComponent } from './components/shared/folder-creation/folder-creation.component';

@NgModule({
  declarations: [AppComponent, UnauthenticatedComponent],
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
    RouterModule.forRoot(appRoutes),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ConfigModule.forRoot(),
    BrowserAnimationsModule,
    AuthenticatedModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    GoogleService,
    AuthGuardService,
    PreventAuthGuardService,
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
