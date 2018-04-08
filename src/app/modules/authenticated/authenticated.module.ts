import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { MatIconModule, MatButtonModule, MatTableModule, MatPaginatorModule } from '@angular/material';

// Components
import { HomeComponent } from '../../components/tabs/home/home.component';
import { ConfigComponent } from '../../components/tabs/config/config.component';
import { SettingsComponent } from '../../components/tabs/settings/settings.component';
import { ConfigListComponent } from '../../components/tabs/config/config-list/config-list.component';

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
    ConfigListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule
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
