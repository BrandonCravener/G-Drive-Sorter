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
import { Parallax, ParallaxConfig } from 'ngx-parallax';
import { UnauthenticatedComponent } from './components/auth/unauthenticated/unauthenticated.component';

// Service imports
import { GoogleService } from './services/google/google.service';
import { AuthGuardService, PreventAuthGuardService } from './services/auth/auth-guard.service';
import { HomeComponent } from './components/tabs/home/home.component';
import { ConfigComponent } from './components/tabs/config/config.component';
import { SettingsComponent } from './components/tabs/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    UnauthenticatedComponent,
    Parallax,
    HomeComponent,
    ConfigComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [GoogleService, AuthGuardService, PreventAuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
