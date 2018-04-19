// Angular
import { Router } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';

// Material
import { MatDialog } from '@angular/material';

// Components
import { ConfigModalComponent } from '../../shared/config-modal/config-modal.component';

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
  constructor(private dialog: MatDialog, private router: Router, private zone: NgZone) { }

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
      this.dialog.open(ConfigModalComponent, {
        width: `${this.getDialogWidth()}px`,
      })
    } else {
      this.zone.run(() => {
        this.router.navigate(['/app/config/create']);
      });
    }
  }

}
