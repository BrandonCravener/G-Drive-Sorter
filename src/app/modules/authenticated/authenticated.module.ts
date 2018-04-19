// Angular imports
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Modules imports
import { MatIconModule, MatButtonModule, MatTableModule, MatPaginatorModule, MatTooltipModule, MatDialogModule, MatDialogContent, MatStepperModule, MatFormFieldModule, MatInputModule, MatListModule, MatExpansionModule, MatSelectModule, MatGridListModule, MatDatepickerModule, MatDatepicker, MatNativeDateModule } from '@angular/material';

// Components imports
import { HomeComponent } from '../../components/tabs/home/home.component';
import { ConfigComponent } from '../../components/tabs/config/config.component';
import { SettingsComponent } from '../../components/tabs/settings/settings.component';
import { ConfigModalComponent } from '../../components/shared/config-modal/config-modal.component';
import { ConfigListComponent } from '../../components/tabs/config/config-list/config-list.component';
import { NewRulePageComponent } from '../../components/shared/new-rule-page/new-rule-page.component';
import { NewRuleStepperComponent } from '../../components/shared/new-rule-stepper/new-rule-stepper.component';

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
    SettingsComponent,
    ConfigListComponent,
    ConfigModalComponent,
    NewRulePageComponent,
    NewRuleStepperComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatStepperModule,
    MatTooltipModule,
    MatGridListModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    ConfigModalComponent
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
