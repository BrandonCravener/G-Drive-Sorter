import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { ConfigBuilder } from '../../../classes/config-builder';
import { DatabaseService } from '../../../services/firebase/database.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GoogleService } from '../../../services/google/google.service';
import { GroupFolderInterface } from '../../../../interfaces';
import { MatDialogRef, MatSlideToggleChange } from '@angular/material';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { FolderCreationComponent } from '../folder-creation/folder-creation.component';

@Component({
  selector: 'app-config-modal',
  templateUrl: './config-modal.component.html',
  styleUrls: ['./config-modal.component.scss']
})
export class ConfigModalComponent implements OnInit {
  @ViewChild(FolderCreationComponent)
  private folderComponent: FolderCreationComponent;

  private rule: any;
  private folderType: string;
  private _closeCommand = new Subject<Boolean>();

  public isPage = false;
  public step: number = -1;
  public newConfig: FormGroup;
  public finished: boolean = false;
  public source: GroupFolderInterface = {
    folderID: undefined,
    name: null
  };
  public destination: GroupFolderInterface = {
    folderID: undefined,
    name: null
  };
  public creatingFolder: boolean = false;
  public folderButtonSourceDisabled: boolean = false;
  public closeCommand = this._closeCommand.asObservable();
  public folderButtonDestinationDisabled: boolean = false;

  constructor(
    public zone: NgZone,
    public router: Router,
    public formBuilder: FormBuilder,
    private google: GoogleService,
    private database: DatabaseService,
    private firebase: AngularFirestore,
    private firebaseAuth: AngularFireAuth
  ) {}

  ngOnInit() {
    this.newConfig = this.formBuilder.group({
      floatLabel: 'auto',
      newConfigNameControl: ['', Validators.required],
      newGroupNameControl: ['', Validators.required]
    });
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

  checkValidation(stepNumber: number) {
    switch (stepNumber) {
      case 0:
        return this.newConfig.get('newConfigNameControl').valid;
      case 1:
        return this.newConfig.get('newGroupNameControl').valid;
      case 2:
        if (
          this.source.folderID === undefined ||
          this.destination.folderID === undefined
        ) {
          return false;
        } else {
          return true;
        }
      case 3:
        return this.rule === undefined ? false : true;
      default:
        return false;
    }
  }

  setStep(index: number) {
    this.step = index;
  }

  openFolderPicker(folderType: string) {
    let folderPickedListener = this.google.folderPicked$.subscribe(
      pickedFolder => {
        if (folderType === 'destination') {
          this.destination = {
            name: pickedFolder.name,
            folderID: pickedFolder.id
          };
        } else if (folderType === 'source') {
          this.source = {
            name: pickedFolder.name,
            folderID: pickedFolder.id
          };
        }
        folderPickedListener.unsubscribe();
      },
      err => {
        folderPickedListener.unsubscribe();
      }
    );
    this.google.openFilePicker();
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

  rootToggleChange(event: MatSlideToggleChange, folderType: string) {
    if (event.checked) {
      if (folderType === 'source') {
        this.folderButtonSourceDisabled = true;
      } else if (folderType === 'destination') {
        this.folderButtonDestinationDisabled = true;
      }
      this[folderType].folderID = 'root';
      this[folderType].name = 'My Drive';
    } else {
      if (folderType === 'source') {
        this.folderButtonSourceDisabled = false;
      } else if (folderType === 'destination') {
        this.folderButtonDestinationDisabled = false;
      }
      this[folderType].folderID = undefined;
      this[folderType].name = '';
    }
  }

  createToggleChange(event: MatSlideToggleChange) {
    if (event.checked) {
      this.creatingFolder = true;
    } else {
      this.creatingFolder = false;
      this.folderComponent.reset();
    }
  }

  create() {
    if (this.checkAllValidation()) {
      this.database.createConfig(
        this.newConfig.get('newConfigNameControl').value,
        this.newConfig.get('newGroupNameControl').value,
        this.source,
        this.destination,
        this.rule
      );
      this._closeCommand.next(true);
    } else {
      this.finished = false;
    }
  }

  close() {
    this._closeCommand.next(true);
  }
}
