import { AngularOnboardingModule } from 'angular-onboarding';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from '../../components/tabs/config/config.component';
import { ConfigModule } from '../config/config.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from '../../components/tabs/home/home.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSnackBarModule,
  MatTooltipModule
} from '@angular/material';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { SettingsComponent } from '../../components/tabs/settings/settings.component';
import { SorterService } from '../../services/sorter/sorter.service';

/**
 * Handles all authenticated components
 *
 * @export
 * @class AuthenticatedModule
 */
@NgModule({
  declarations: [HomeComponent, ConfigComponent, SettingsComponent],
  imports: [
    FormsModule,
    CommonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    ConfigModule.forRoot(),
    AngularOnboardingModule
  ],
  providers: [SorterService],
  exports: [ConfigComponent]
})
export class AuthenticatedModule {
  /**
   * Register with the root module of the app
   *
   * @static
   * @returns {ModuleWithProviders} This module
   * @memberof AuthenticatedModule
   */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthenticatedModule,
      providers: []
    };
  }
}
