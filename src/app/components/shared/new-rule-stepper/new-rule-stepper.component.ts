import {
  Component,
  forwardRef,
  Input,
  NgZone,
  OnInit,
  Output,
  EventEmitter
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
import { Router } from '@angular/router';
import { StepperSelectionEvent } from '@angular/cdk/stepper';

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

  @Output()
  valueChange = new EventEmitter();

  value: any;
  
  // Stepper variables and methods
  classifierFormGroup: FormGroup;
  constraintFormGroup: FormGroup;
  inputFieldGroup: FormGroup;

  betweenConstraintDisabled: boolean = false;
  startEndWithDisabled: boolean = false;

  classifierSelectOption: string;
  constraintSelectOption: string;
  
  pickedFolder: string;

  constriants = [
    {
      label: 'Include\'s',
      value: 'include'
    },
    {
      label: 'Exclude\'s',
      value: 'exclude'
    }
  ]

  classifiers = [
    {
      label: 'Title',
      value: 'title',
      inputFieldControl: 'titleTextControl',
      hideBetween: true,
      hideStartEnd: false
    },
    {
      label: 'Type',
      value: 'type',
      inputFieldControl: 'fileTypeControl',
      hideBetween: true,
      hideStartEnd: true
    },
    {
      label: 'Location',
      value: 'location',
      inputFieldControl: 'folderLocationControl',
      hideBetween: true,
      hideStartEnd: true
    },
    {
      label: 'Owner',
      value: 'owner',
      inputFieldControl: 'ownerTextControl',
      hideBetween: true,
      hideStartEnd: false
    },
    {
      label: 'Creation Date',
      value: 'creationDate',
      inputFieldControl: 'dateControl',
      hideBetween: false,
      hideStartEnd: true
    },
    {
      label: 'Last Opened',
      value: 'lastOpened',
      inputFieldControl: 'dateControl',
      hideBetween: false,
      hideStartEnd: true
    },
    {
      label: 'Last Modified',
      value: 'lastModified',
      inputFieldControl: 'dateControl',
      hideBetween: false,
      hideStartEnd: true
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
  ) { }

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

  private checkIfStartEndDisabled(classifierValue: string): boolean {
    return this
      .valueArrayToObject(this.classifiers)[classifierValue]
      .hideStartEnd;
  }

  private getFieldControl(classifierValue: string): string {
    return this
      .valueArrayToObject(this.classifiers)[classifierValue]
      .inputFieldControl;
  }
  
  ngOnInit(): void {
    this.classifierFormGroup = this.formBuilder.group({
      classifierControl: ['', Validators.required]
    });
    this.constraintFormGroup = this.formBuilder.group({
      constraintControl: ['', Validators.required]
    });
    this.inputFieldGroup = this.formBuilder.group({
      folderLocationControl: [{
        value: null,
        disabled: true
      }],
      secondDateControl: null,
      firstDateControl: null,
      titleTextControl: null,
      ownerTextControl: null,
      fileTypeControl: null,
      dateControl: null
    });
    this.google.folderPicked$.subscribe(folder => {
      this.pickedFolder = folder.id;
      this.inputFieldGroup.get('folderLocationControl').setValue(folder.name);
    });
  }

  finished(): void {
    const data = {}
    switch (this.getFieldControl(this.classifierSelectOption)) {
      case 'titleTextControl':
          data['title'] = this.inputFieldGroup.get('titleTextControl').value;
        break;
      case 'fileTypeControl':
          data['fileType'] = this.inputFieldGroup.get('fileTypeControl').value;
        break;
      case 'folderLocationControl':
          data['folder'] = this.pickedFolder;
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
      classifier: this.classifierFormGroup.get('classifierControl').value,
      constraint: this.constraintFormGroup.get('constraintControl').value,
      data: data
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
    if (event.previouslySelectedIndex === 0) {
      const classifierValue = this.classifierFormGroup.get('classifierControl').value;
      this.betweenConstraintDisabled = this.checkIfBetweenDisabled(classifierValue);
      this.startEndWithDisabled = this.checkIfStartEndDisabled(classifierValue);
      if (this.betweenConstraintDisabled) {
        this.constraintFormGroup.get('constraintControl').setValue('include');
      }
    }
  }

  openFolderPicker(): void {
    this.google.openFilePicker();
  }
}
