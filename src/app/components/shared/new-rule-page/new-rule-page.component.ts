import { Component, OnInit } from '@angular/core';
import { NewRuleStepperComponent } from '../new-rule-stepper/new-rule-stepper.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-rule-page',
  templateUrl: '../../tabs/config/config-modal/config-modal.component.html',
  styleUrls: ['../../tabs/config/config-modal/config-modal.component.scss']
})
export class NewRulePageComponent extends NewRuleStepperComponent implements OnInit { 
  newConfig: FormGroup;
  isPage = true;

  ngOnInit() {
    this.newConfig = this.formBuilder.group({
      floatLabel: 'auto',
      newConfigNameControl: ['', Validators.required],
      newGroupNameControl: ['', Validators.required]
    })
  }

  close() {
    this.zone.run(() => {
      this.router.navigateByUrl('/app/config');
    });
  }
}
