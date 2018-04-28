import { CommonModule } from '@angular/common';
import { ConfigListComponent } from '../../components/tabs/config/config-list/config-list.component';
import { ConfigModalComponent } from '../../components/shared/config-modal/config-modal.component';
import {
  MatDatepickerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatNativeDateModule,
  MatPaginator,
  MatPaginatorModule,
  MatSelectModule,
  MatStepperModule,
  MatTableModule,
  MatButtonModule,
  MatIconModule,
  MatTooltipModule
  } from '@angular/material';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { NewConfigPageComponent } from '../../components/shared/new-config-page/new-config-page.component';
import { NewRuleStepperComponent } from '../../components/shared/new-rule-stepper/new-rule-stepper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditConfigModalComponent } from '../../components/shared/edit-config-modal/edit-config-modal.component';

@NgModule({
  declarations: [
    ConfigListComponent,
    NewConfigPageComponent,
    ConfigModalComponent,
    NewRuleStepperComponent,
    EditConfigModalComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatButtonModule,
    MatTooltipModule,
    MatStepperModule,
    MatGridListModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    ConfigModalComponent,
    EditConfigModalComponent
  ],
  exports: [
    ConfigListComponent
  ]
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
    }
  }
}
