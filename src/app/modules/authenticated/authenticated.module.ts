import { CommonModule } from '@angular/common';
import { ConfigComponent } from '../../components/tabs/config/config.component';
import { ConfigListComponent } from '../../components/tabs/config/config-list/config-list.component';
import { ConfigModalComponent } from '../../components/shared/config-modal/config-modal.component';
import { ConfigModule } from '../config/config.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from '../../components/tabs/home/home.component';
import {
  MatButtonModule,
  MatDatepicker,
  MatDatepickerModule,
  MatDialogContent,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatSelectModule,
  MatStepperModule,
  MatTableModule,
  MatTooltipModule
  } from '@angular/material';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { NewRulePageComponent } from '../../components/shared/new-rule-page/new-rule-page.component';
import { NewRuleStepperComponent } from '../../components/shared/new-rule-stepper/new-rule-stepper.component';
import { SettingsComponent } from '../../components/tabs/settings/settings.component';

/**
 * Handles all authenticated components
 * 
 * @export
 * @class AuthenticatedModule
 */
@NgModule({
  declarations: [
    HomeComponent,
    ConfigComponent,
    SettingsComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
    ReactiveFormsModule,
    ConfigModule.forRoot()
  ]
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
    }
  }
}
