import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-rule-stepper',
  templateUrl: './new-rule-stepper.component.html',
  styleUrls: ['./new-rule-stepper.component.scss']
})
export class NewRuleStepperComponent implements OnInit {

  classifiers = [
    {
      label: 'Title',
      value: 'title'
    },
    {
      label: 'Type',
      value: 'type'
    },
    {
      label: 'Location',
      value: 'location'
    },
    {
      label: 'Owner',
      value: 'owner'
    },
    {
      label: 'Creation Date',
      value: 'creationDate'
    },
    {
      label: 'Last Opened',
      value: 'lastOpened'
    },
    {
      label: 'Last Modified',
      value: 'lastModified'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
