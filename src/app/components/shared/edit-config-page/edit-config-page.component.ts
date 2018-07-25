import { Component } from '@angular/core';

import { EditConfigModalComponent } from '../edit-config-modal/edit-config-modal.component';

@Component({
  selector: 'app-edit-config-page',
  templateUrl: '../edit-config-modal/edit-config-modal.component.html',
  styleUrls: ['../edit-config-modal/edit-config-modal.component.scss']
})
export class EditConfigPageComponent extends EditConfigModalComponent {
  isPage = true;

  close() {
    this.zone.run(() => {
      this.router.navigateByUrl('/app/config');
    });
  }
}
