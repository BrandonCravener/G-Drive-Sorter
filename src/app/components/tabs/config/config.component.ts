// Angular
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

// Components
import { ConfigModalComponent } from './config-modal/config-modal.component';

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
  constructor(private dialog: MatDialog) { }

  /**
   * Handle component initalization
   * 
   * @memberof ConfigComponent
   */
  ngOnInit() {
  }

  openNewConfigDialog() {
    this.dialog.open(ConfigModalComponent, {
      width: `${(document.body.clientWidth / Math.PI) * 1.25}px`,
    })
  }

}
