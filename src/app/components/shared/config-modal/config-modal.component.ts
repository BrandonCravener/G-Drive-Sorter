import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-config-modal',
  templateUrl: './config-modal.component.html',
  styleUrls: ['./config-modal.component.scss']
})
export class ConfigModalComponent implements OnInit {

  rule: any;
  isPage = false;
  step: number = -1;
  newConfig: FormGroup;
  finished: boolean = false;
  
  private _closeCommand = new Subject<Boolean>();
  public closeCommand = this._closeCommand.asObservable();

  constructor(
    public zone: NgZone, 
    public router: Router,
    public formBuilder: FormBuilder 
  ) { }

  ngOnInit() {
    this.newConfig = this.formBuilder.group({
      floatLabel: 'auto',
      newConfigNameControl: ['', Validators.required],
      newGroupNameControl: ['', Validators.required],
    })
  }
  
  checkValidation(stepNumber: number) {
    switch (stepNumber) {
      case 0:
        return this.newConfig.get('newConfigNameControl').valid;
      case 1:
        return this.newConfig.get('newGroupNameControl').valid;
      case 2:
        return ((this.rule === undefined) ? false : true);
      default:
        return false;
    }
  }

  private checkAllValidation(): boolean {
    let anyInvalid = false;
    for (let i = 0; i < 2; i++) {
      if (!this.checkValidation(i)) {
        anyInvalid = true;
      }
    }
    return !anyInvalid;
  }

  
  setStep(index: number) {
    this.step = index;
  }
  
  nextStep() {
    if (this.checkValidation(this.step)) {
      this.step++;
    }
  }

  prevStep() {
    this.step--;
  }
  
  stepperFinished(rule) {
    this.rule = rule;
    this.setStep(-1);
    this.finished = this.checkAllValidation();
  }

  create() {
    if (this.checkAllValidation()) {
      
    } else {
      this.finished = false;
    }
  }

  close() {
    this._closeCommand.next(true);
  }
}
