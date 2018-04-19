// Angular
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Componets
import { ConfigModalComponent } from '../config-modal/config-modal.component';
import { NewRuleStepperComponent } from '../new-rule-stepper/new-rule-stepper.component';

@Component({
  selector: 'app-new-rule-page',
  templateUrl: '../config-modal/config-modal.component.html',
  styleUrls: ['../config-modal/config-modal.component.scss']
})
export class NewRulePageComponent extends ConfigModalComponent { 
  isPage = true;

  close() {
    this.zone.run(() => {
      this.router.navigateByUrl('/app/config');
    });
  }
}
