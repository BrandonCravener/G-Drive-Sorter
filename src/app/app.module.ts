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

// Route imports
import { appRoutes } from './app.routes';

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
