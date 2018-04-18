import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-rule-stepper',
  templateUrl: './new-rule-stepper.component.html',
  styleUrls: ['./new-rule-stepper.component.scss']
})
export class NewRuleStepperComponent implements OnInit {

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
    },
    // {
    //   label: 'Start\'s With',
    //   value: 'startWith'
    // },
    // {
    //   label: 'End\'s With',
    //   value: 'endWith'
    // },
    // {
    //   label: 'Between',
    //   value: 'between'
    // }
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

  private valueArrayToObject(array: Array<object>): object {
    const searchableObject: object = {};
    array.forEach(value => {
      searchableObject[value['value']] = value
    });
    return searchableObject;
  }

  private checkIfBetweenDisabled(classifierValue: string): boolean {
    return this.valueArrayToObject(this.classifiers)[classifierValue].hideBetween;
  }

  private checkIfStartEndDisabled (classifierValue: string): boolean {
    return this.valueArrayToObject(this.classifiers)[classifierValue].hideStartEnd;
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
