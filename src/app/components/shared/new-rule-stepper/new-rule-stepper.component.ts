import {
  Component,
  forwardRef,
  NgZone,
  OnInit
  } from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators
  } from '@angular/forms';
import { Router } from '@angular/router';
import { StepperSelectionEvent } from '@angular/cdk/stepper';

@Component({
  selector: 'app-new-rule-stepper',
  templateUrl: './new-rule-stepper.component.html',
  styleUrls: ['./new-rule-stepper.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NewRuleStepperComponent),
      multi: true
    }
  ]
})
export class NewRuleStepperComponent implements OnInit, ControlValueAccessor {
  // Form control variables and methods
  _value: Object;
  onChange: any = () => {};
  onTouched: any = () => {};

  get value() {
    return this._value;
  }

  set value(newValue) {
    this._value = newValue;
    this.onChange(newValue);
    this.onTouched();
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // Stepper variables and methods
  classifierFormGroup: FormGroup;
  constraintFormGroup: FormGroup;
  inputFieldGroup: FormGroup;

  betweenConstraintDisabled: boolean = false;
  startEndWithDisabled: boolean = false;

  classifierSelectOption: string;
  constraintSelectOption: string;

  classifiers = [
    {
      label: 'Title',
      value: 'title',
      hideBetween: true,
      hideStartEnd: false
    },
    {
      label: 'Type',
      value: 'type',
      hideBetween: true,
      hideStartEnd: true
    },
    {
      label: 'Location',
      value: 'location',
      hideBetween: true,
      hideStartEnd: false
    },
    {
      label: 'Owner',
      value: 'owner',
      hideBetween: true,
      hideStartEnd: false
    },
    {
      label: 'Creation Date',
      value: 'creationDate',
      hideBetween: false,
      hideStartEnd: true
    },
    {
      label: 'Last Opened',
      value: 'lastOpened',
      hideBetween: false,
      hideStartEnd: true
    },
    {
      label: 'Last Modified',
      value: 'lastModified',
      hideBetween: false,
      hideStartEnd: true
    }
  ]

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
  
  constructor(public formBuilder: FormBuilder, public zone: NgZone, public router: Router) { }
  
  private checkIfBetweenDisabled(classifierValue: string): boolean {
    return this.valueArrayToObject(this.classifiers)[classifierValue].hideBetween;
  }

  private checkIfStartEndDisabled (classifierValue: string): boolean {
    return this.valueArrayToObject(this.classifiers)[classifierValue].hideStartEnd;
  }
  
  private valueArrayToObject(array: Array<object>): object {
    const searchableObject: object = {};
    array.forEach(value => {
      searchableObject[value['value']] = value
    });
    return searchableObject;
  }
  
  ngOnInit() {
    this.classifierFormGroup = this.formBuilder.group({
      classifierControl: ['', Validators.required]
    });
    this.constraintFormGroup = this.formBuilder.group({
      constraintControl: ['', Validators.required]
    });
    this.inputFieldGroup = this.formBuilder.group({
      titleTextControl: ['', Validators.required],
      fileTypeControl: ['', Validators.required]
    });
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

  stepChanged(event: StepperSelectionEvent) {
    if (event.previouslySelectedIndex === 0) {
      const classifierValue = this.classifierFormGroup.get('classifierControl').value;
      this.betweenConstraintDisabled = this.checkIfBetweenDisabled(classifierValue);
      this.startEndWithDisabled = this.checkIfStartEndDisabled(classifierValue);
      if (this.betweenConstraintDisabled) {
        this.constraintFormGroup.get('constraintControl').setValue('include');
      }
    }
  }
}
