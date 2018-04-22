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
  MatIconModule
  } from '@angular/material';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { NewRulePageComponent } from '../../components/shared/new-rule-page/new-rule-page.component';
import { NewRuleStepperComponent } from '../../components/shared/new-rule-stepper/new-rule-stepper.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ConfigListComponent,
    NewRulePageComponent,
    ConfigModalComponent,
    NewRuleStepperComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatButtonModule,
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
    ConfigModalComponent
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
