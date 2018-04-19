// Angular
import { MatDialogRef } from '@angular/material';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-config-modal',
  templateUrl: './config-modal.component.html',
  styleUrls: ['./config-modal.component.scss']
})
export class ConfigModalComponent implements OnInit {

  newConfig: FormGroup;

  isPage = false;

  constructor(
    public formBuilder: FormBuilder, 
    public zone: NgZone, 
    public router: Router
  ) { }

  ngOnInit() {
    this.newConfig = this.formBuilder.group({
      floatLabel: 'auto',
      newConfigNameControl: ['', Validators.required],
      newGroupNameControl: ['', Validators.required]
    })
  }

  create() {
    
  }

}
