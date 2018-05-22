import { Component, OnInit } from '@angular/core';
import { PresetConfigComponent } from '../preset-config/preset-config.component';

@Component({
  selector: 'app-preset-config-page',
  templateUrl: '../preset-config/preset-config.component.html',
  styleUrls: ['../preset-config/preset-config.component.scss']
})
export class PresetConfigPageComponent extends PresetConfigComponent {
  isPage = true;

  close() {
    this.zone.run(() => {
      this.router.navigateByUrl('/app/config');
    });
  }
}
