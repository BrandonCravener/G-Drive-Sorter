import { CommonModule } from '@angular/common';
import { ConfigListComponent } from '../../components/tabs/config/config-list/config-list.component';
import { ConfigModalComponent } from '../../components/shared/config-modal/config-modal.component';
import { EditConfigModalComponent } from '../../components/shared/edit-config-modal/edit-config-modal.component';
import { EditConfigPageComponent } from '../../components/shared/edit-config-page/edit-config-page.component';
import { FolderCreationComponent } from '../../components/shared/folder-creation/folder-creation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatPaginator,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTableModule,
  MatTooltipModule
  } from '@angular/material';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { NewConfigPageComponent } from '../../components/shared/new-config-page/new-config-page.component';
import { NewRuleStepperComponent } from '../../components/shared/new-rule-stepper/new-rule-stepper.component';
import { UnNamedPipe } from '../../pipes/un-named.pipe';

@NgModule({
  declarations: [
    ConfigListComponent,
    NewConfigPageComponent,
    ConfigModalComponent,
    NewRuleStepperComponent,
    EditConfigModalComponent,
    EditConfigPageComponent,
    FolderCreationComponent,
    UnNamedPipe
  ],
  imports: [
    FormsModule,
    CommonModule,
    MatIconModule,
    MatListModule,
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
    MatProgressBarModule,
    MatSlideToggleModule
  ],
  entryComponents: [ConfigModalComponent, EditConfigModalComponent],
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
