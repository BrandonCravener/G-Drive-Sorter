import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTableModule,
  MatTooltipModule,
} from '@angular/material';
import { AngularOnboardingModule } from 'angular-onboarding';

import { ConfigModalComponent } from '../../components/shared/config-modal/config-modal.component';
import { EditConfigModalComponent } from '../../components/shared/edit-config-modal/edit-config-modal.component';
import { EditConfigPageComponent } from '../../components/shared/edit-config-page/edit-config-page.component';
import { FolderCreationComponent } from '../../components/shared/folder-creation/folder-creation.component';
import { NewConfigPageComponent } from '../../components/shared/new-config-page/new-config-page.component';
import { NewRuleStepperComponent } from '../../components/shared/new-rule-stepper/new-rule-stepper.component';
import { ConfigListComponent } from '../../components/tabs/config/config-list/config-list.component';
import { PresetConfigPageComponent } from '../../components/tabs/config/preset-config-page/preset-config-page.component';
import { PresetConfigComponent } from '../../components/tabs/config/preset-config/preset-config.component';
import { UnNamedPipe } from '../../pipes/un-named.pipe';
import { ConfigRoutingModule } from './config-routing.module';

@NgModule({
  declarations: [
    ConfigListComponent,
    NewConfigPageComponent,
    ConfigModalComponent,
    NewRuleStepperComponent,
    EditConfigModalComponent,
    EditConfigPageComponent,
    FolderCreationComponent,
    PresetConfigComponent,
    PresetConfigPageComponent,
    UnNamedPipe
  ],
  imports: [
    FormsModule,
    CommonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatButtonModule,
    MatTooltipModule,
    MatStepperModule,
    MatGridListModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    ConfigRoutingModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    AngularOnboardingModule
  ],
  entryComponents: [ConfigModalComponent, EditConfigModalComponent, PresetConfigComponent],
  exports: [ConfigListComponent]
})
export class ConfigModule {
  /**
   * Register with the root module of the app
   *
   * @static
   * @returns {ModuleWithProviders} This module
   * @memberof ConfigModule
   */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ConfigModule,
      providers: []
    };
  }
}
