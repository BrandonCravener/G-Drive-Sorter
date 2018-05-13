import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigComponent } from '../../components/tabs/config/config.component';
import { NewConfigPageComponent } from '../../components/shared/new-config-page/new-config-page.component';
import { AuthGuardService } from '../../services/auth/auth-guard.service';
import { PresetConfigPageComponent } from '../../components/tabs/config/preset-config-page/preset-config-page.component';
import { EditConfigPageComponent } from '../../components/shared/edit-config-page/edit-config-page.component';


const routes: Routes = [
  {
    path: 'app/config',
    component: ConfigComponent,
    canActivate: [AuthGuardService],
    data: {
      state: 'appConfig'
    }
  },
  {
    path: 'app/config/create',
    component: NewConfigPageComponent,
    canActivate: [AuthGuardService],
    data: {
      state: 'appConfigCreate'
    }
  },
  {
    path: 'app/config/presets',
    component: PresetConfigPageComponent,
    canActivate: [AuthGuardService],
    data: {
      state: 'appConfigPresets'
    }
  },
  {
    path: 'app/config/edit',
    component: EditConfigPageComponent,
    canActivate: [AuthGuardService],
    data: {
      state: 'appConfigEdit'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigRoutingModule { }