import { Component, OnInit } from '@angular/core';

/**
 * Declare a component to be shown when the home tab is selected.
 * 
 * @export
 * @class HomeComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  /**
   * Creates an instance of HomeComponent.
   * @memberof HomeComponent
   */
  constructor() { }

  /**
   * Handle component initalization
   * 
   * @memberof HomeComponent
   */
  ngOnInit() {
  }

}
