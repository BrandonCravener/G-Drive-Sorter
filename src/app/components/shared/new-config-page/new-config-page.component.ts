import { Component, OnInit } from '@angular/core';
import { ConfigModalComponent } from '../config-modal/config-modal.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewRuleStepperComponent } from '../new-rule-stepper/new-rule-stepper.component';

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
