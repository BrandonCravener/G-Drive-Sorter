import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HomeComponent } from '../../components/tabs/home/home.component';
import { ConfigComponent } from '../../components/tabs/config/config.component';
import { SettingsComponent } from '../../components/tabs/settings/settings.component';

/**
 * Handles all authenticated components
 * 
 * @export
 * @class AuthenticatedModule
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomeComponent,
    ConfigComponent,
    SettingsComponent
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
