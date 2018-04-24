import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { Component, NgZone, OnInit } from '@angular/core';
import { ConfigBuilder } from '../../../classes/config-builder';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { DatabaseService } from '../../../services/firebase/database.service';

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
    public formBuilder: FormBuilder,
    private database: DatabaseService,
    private firebase: AngularFirestore, 
    private firebaseAuth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.newConfig = this.formBuilder.group({
      floatLabel: 'auto',
      newConfigNameControl: ['', Validators.required],
      newGroupNameControl: ['', Validators.required],
    })
  }
  
  private checkValidation(stepNumber: number) {
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
      this.database.createConfig(
        this.newConfig.get('newConfigNameControl').value,
        this.newConfig.get('newGroupNameControl').value,
        this.rule
      );
    } else {
      this.finished = false;
    }
  }

  close() {
    this._closeCommand.next(true);
  }
}
