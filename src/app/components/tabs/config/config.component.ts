import { Component, NgZone, OnInit } from '@angular/core';
import { ConfigModalComponent } from '../../shared/config-modal/config-modal.component';
import { MatDialog } from '@angular/material';
import { RepositionScrollStrategy } from '@angular/cdk/overlay';
import { Router } from '@angular/router';

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
  constructor(
    private dialog: MatDialog, 
    private router: Router, 
    private zone: NgZone
  ) { }

  /**
   * Handle component initalization
   * 
   * @memberof ConfigComponent
   */
  ngOnInit() {
  }

  private getDialogWidth() {
    const width: number = document.body.clientWidth;
    if (width >= 1280) {
      return (width / 2);
    } else if (width >= 640) {
      return (width / 1.5);
    } else {
      return 0;
    }
  }

  openNewConfigDialog() {
    let dialogWidth = this.getDialogWidth();
    if (dialogWidth) {
      const dialogInstance = this.dialog.open(ConfigModalComponent, {
        width: `${this.getDialogWidth()}px`,
        maxHeight: `${document.body.clientHeight * .9}px`
      });
      const componentInstance = dialogInstance.componentInstance;
      componentInstance
        .closeCommand
        .subscribe(close => {
          dialogInstance.close();
        });
    } else {
      this.zone.run(() => {
        this.router.navigate(['/app/config/create']);
      });
    }
  }

}
