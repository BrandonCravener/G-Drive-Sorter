import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatToolbarModule, MatIconModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

import { RouterModule, Routes } from '@angular/router';

import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { Parallax, ParallaxConfig } from 'ngx-parallax';
import { AuthenticatedComponent } from './components/auth/authenticated/authenticated.component';
import { UnauthenticatedComponent } from './components/auth/unauthenticated/unauthenticated.component';

import { GoogleService } from './services/google/google.service';
import { AuthGuardService, PreventAuthGuardService } from './services/auth/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticatedComponent,
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
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [GoogleService, AuthGuardService, PreventAuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
