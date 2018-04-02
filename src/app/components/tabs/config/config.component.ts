import { Component, OnInit } from '@angular/core';

/**
 * Declare component to be shown when the config tab is selected.
 * 
 * @export
 * @class ConfigComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {
  /**
   * Creates an instance of ConfigComponent.
   * @memberof ConfigComponent
   */
  constructor() { }

  /**
   * Handle component initalization
   * 
   * @memberof ConfigComponent
   */
  ngOnInit() {
  }

}
