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

  newConfig: FormGroup;
  isPage = false;

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
      newRuleStepperControl: ['', Validators.required]
    })
  }

  create() {
    
  }

  close() {
    this._closeCommand.next(true);
  }
}
