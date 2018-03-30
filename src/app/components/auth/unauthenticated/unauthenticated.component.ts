import { Component, OnInit, ViewChild } from '@angular/core';

import { GoogleService } from '../../../services/google/google.service';


@Component({
  selector: 'app-unauthenticated',
  templateUrl: './unauthenticated.component.html',
  styleUrls: ['./unauthenticated.component.css']
})

export class UnauthenticatedComponent implements OnInit {

  constructor(public google: GoogleService) { }

  ngOnInit() {
  }

  login() {
    this.google.signIn();
  }

}
