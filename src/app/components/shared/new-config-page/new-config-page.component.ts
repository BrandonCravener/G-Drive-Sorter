import { Component } from '@angular/core';

import { ConfigModalComponent } from '../config-modal/config-modal.component';

@Component({
  selector: 'app-new-rule-page',
  templateUrl: '../config-modal/config-modal.component.html',
  styleUrls: ['../config-modal/config-modal.component.scss']
})
export class NewConfigPageComponent extends ConfigModalComponent {
  isPage = true;

  close() {
    this.zone.run(() => {
      this.router.navigateByUrl('/app/config');
    });
  }
}
