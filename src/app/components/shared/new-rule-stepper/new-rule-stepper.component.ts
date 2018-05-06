import {
  AfterViewInit,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  NgZone,
  OnInit,
  Output,
  ViewChild
  } from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators
  } from '@angular/forms';
import { GoogleService } from '../../../services/google/google.service';
import { MatVerticalStepper } from '@angular/material';
import { Router } from '@angular/router';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { v4 as uuid } from 'uuid';

export const DEFAULT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NewRuleStepperComponent),
  multi: true
}

@Component({
  selector: 'app-new-rule-stepper',
  templateUrl: './new-rule-stepper.component.html',
  styleUrls: ['./new-rule-stepper.component.scss'],
  providers: [DEFAULT_VALUE_ACCESSOR]
})
export class NewRuleStepperComponent implements OnInit {

  @Input() inputRule: any;
  @Input() reset: boolean;

  @Output() valueChange = new EventEmitter();

  @ViewChild('stepper') stepper: MatVerticalStepper;

  value: any;
  
  // Stepper variables and methods
  classifierFormGroup: FormGroup;
  constraintFormGroup: FormGroup;
  inputFieldGroup: FormGroup;
  nameFormGroup: FormGroup;

  betweenConstraintDisabled: boolean = false;
  startEndWithDisabled: boolean = false;

  classifierSelectOption: string;
  constraintSelectOption: string;

  constriants = [
    {
      label: 'Include\'s / After',
      value: 'include'
    },
    {
      label: 'Exclude\'s / Before',
      value: 'exclude'
    }
  ]

  classifiers = [
    {
      label: 'Title',
      value: 'title',
      inputFieldControl: 'titleTextControl',
      hideBetween: true
    },
    {
      label: 'Type',
      value: 'type',
      inputFieldControl: 'fileTypeControl',
      hideBetween: true
    },
    {
      label: 'Owner',
      value: 'owner',
      inputFieldControl: 'ownerTextControl',
      hideBetween: true
    },
    {
      label: 'Creation Date',
      value: 'creationDate',
      inputFieldControl: 'dateControl',
      hideBetween: false
    },
    {
      label: 'Last Opened',
      value: 'lastOpened',
      inputFieldControl: 'dateControl',
      hideBetween: false
    },
    {
      label: 'Last Modified',
      value: 'lastModified',
      inputFieldControl: 'dateControl',
      hideBetween: false
    }
  ]

  driveFileTypes = [
    {
      label: 'Sound File',
      value: 'application/vnd.google-apps.audio'
    },
    {
      label: 'Document',
      value: 'application/vnd.google-apps.document'
    },
    {
      label: 'Drawing',
      value: 'application/vnd.google-apps.drawing'
    },
    {
      label: 'Drive File',
      value: 'application/vnd.google-apps.file'
    },
    {
      label: 'Drive Folder',
      value: 'application/vnd.google-apps.folder'
    },
    {
      label: 'Forms',
      value: 'application/vnd.google-apps.form'
    },
    {
      label: 'Fusion Tables',
      value: 'application/vnd.google-apps.fusiontable'
    },
    {
      label: 'My Maps',
      value: 'application/vnd.google-apps.map'
    },
    {
      label: 'Image',
      value: 'application/vnd.google-apps.photo'
    },
    {
      label: 'Slide\'s',
      value: 'application/vnd.google-apps.presentation'
    },
    {
      label: 'App\'s Script',
      value: 'application/vnd.google-apps.script'
    },
    {
      label: 'Site\'s',
      value: 'application/vnd.google-apps.site'
    },
    {
      label: 'Sheet\'s',
      value: 'application/vnd.google-apps.spreadsheet'
    },
    {
      label: 'Video',
      value: 'application/vnd.google-apps.video'
    },
  ]
  
  constructor(
    public formBuilder: FormBuilder, 
    public zone: NgZone, 
    public router: Router, 
    public google: GoogleService
  ) {
  }

  private valueArrayToObject(array: Array<object>): object {
    const searchableObject: object = {};
    array.forEach(value => {
      searchableObject[value['value']] = value
    });
    return searchableObject;
  }
  
  private checkIfBetweenDisabled(classifierValue: string): boolean {
    return this
      .valueArrayToObject(this.classifiers)[classifierValue]
      .hideBetween;
  }

  private getFieldControl(classifierValue: string): string {
    return this
      .valueArrayToObject(this.classifiers)[classifierValue]
      .inputFieldControl;
  }
  
  ngOnInit(): void {
    this.nameFormGroup = this.formBuilder.group({
      ruleName: ['', Validators.required]
    });
    this.classifierFormGroup = this.formBuilder.group({
      classifierControl: ['', Validators.required]
    });
    this.constraintFormGroup = this.formBuilder.group({
      constraintControl: ['', Validators.required]
    });
    this.inputFieldGroup = this.formBuilder.group({
      secondDateControl: null,
      firstDateControl: null,
      titleTextControl: null,
      ownerTextControl: null,
      fileTypeControl: null,
      dateControl: null
    });
    if (this.inputRule && this.inputRule.data) {
      this.nameFormGroup.get('ruleName').setValue(this.inputRule.name);
      this.classifierSelectOption = this.inputRule.classifier;
      this.classifierFormGroup.get('classifierControl').setValue(this.inputRule.classifier);
      this.constraintSelectOption = this.inputRule.constraint;
      this.constraintFormGroup.get('constraintControl').setValue(this.inputRule.constraint);
      switch (this.getFieldControl(this.classifierSelectOption)) {
        case 'titleTextControl':
          this.inputFieldGroup.get('titleTextControl')
            .setValue(this.inputRule.data.title);
          break;
        case 'fileTypeControl':
          this.inputFieldGroup.get('fileTypeControl')
            .setValue(this.inputRule.data.fileType);
          break;
        case 'ownerTextControl':
          this.inputFieldGroup.get('ownerTextControl')
            .setValue(this.inputRule.data.owner);
          break;
        case 'dateControl':
          if (this.constraintSelectOption === 'between') {
            this.inputFieldGroup.get('firstDateControl')
              .setValue(this.inputRule.data.firstDate);
            this.inputFieldGroup.get('secondDateControl')
              .setValue(this.inputRule.data.secondDate);
          } else {
            this.inputFieldGroup.get('dateControl')
              .setValue(this.inputRule.data.date);
          }
          break;
      }
    }
  }

  finished(): void {
    const data = {}
    let ruleUUID: string;
    if (this.inputRule) {
      ruleUUID = this.inputRule.id;
    } else {
      ruleUUID = uuid();
    }
    switch (this.getFieldControl(this.classifierSelectOption)) {
      case 'titleTextControl':
          data['title'] = this.inputFieldGroup.get('titleTextControl').value;
        break;
      case 'fileTypeControl':
          data['fileType'] = this.inputFieldGroup.get('fileTypeControl').value;
        break;
      case 'ownerTextControl':
          data['owner'] = this.inputFieldGroup.get('ownerTextControl').value;
        break;
      case 'dateControl':
          if (this.constraintSelectOption === 'between') {
            data['firstDate'] = this.inputFieldGroup.get('firstDateControl').value;
            data['secondDate'] = this.inputFieldGroup.get('secondDateControl').value;
          } else {
            data['date'] = this.inputFieldGroup.get('dateControl').value;
          }
        break;
    }
    const val = {
      id: ruleUUID,
      classifier: this.classifierFormGroup.get('classifierControl').value,
      constraint: this.constraintFormGroup.get('constraintControl').value,
      data: data,
      name: this.nameFormGroup.get('ruleName').value
    }
    this.value = val;
    this.valueChange.emit(this.value);
  }

  /*
    Datepicker Need Codes:
      0 - No picker needed
      1 - Single picker needed
      2 - Double picker needed
  */
  datePickerSingleNeeded(): number {
    const classifierVal = this.classifierSelectOption;
    const constraintVal = this.constraintSelectOption;
    if (
      classifierVal === 'creationDate' ||
      classifierVal === 'lastOpened' ||
      classifierVal === 'lastModified'
    ) {
      if (constraintVal !== 'between') {
        return 1;
      } else {
        return 2;
      }
    }
    return 0;
  }

  stepChanged(event: StepperSelectionEvent): void {
    if (event.previouslySelectedIndex === 1) {
      const classifierValue = this.classifierFormGroup.get('classifierControl').value;
      this.betweenConstraintDisabled = this.checkIfBetweenDisabled(classifierValue);
      if (this.betweenConstraintDisabled) {
        this.constraintFormGroup.get('constraintControl').setValue('include');
      }
    }
  }

  openFolderPicker(): void {
    this.google.openFilePicker();
  }
}
