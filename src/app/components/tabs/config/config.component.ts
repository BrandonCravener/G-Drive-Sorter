import { AfterViewInit, Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AppComponent } from '../../../app.component';
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
  styleUrls: ['./config.component.scss'],
})
export class ConfigComponent implements OnInit, AfterViewInit, OnDestroy {

  public initalized = false;

  private openConfigModalListener: Subscription;

  /**
   * Creates an instance of ConfigComponent.
   * @memberof ConfigComponent
   */
  constructor(
    private appComponent: AppComponent,
    private dialog: MatDialog,
    private router: Router,
    private zone: NgZone
  ) { }

  ngOnInit() {
    this.openConfigModalListener =
      this.appComponent.openConfigModal$.subscribe(open => {
        if (open === true) {
          this.openNewConfigDialog();
        }
      });
  }

  ngAfterViewInit() {
    this.initalized = true;
  }

  ngOnDestroy() {
    this.openConfigModalListener.unsubscribe();
  }

  public getDialogWidth() {
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
    const dialogWidth = this.getDialogWidth();
    if (dialogWidth) {
      const dialogInstance = this.dialog.open(ConfigModalComponent, {
        width: `${dialogWidth}px`,
        maxHeight: `${document.body.clientHeight * .9}px`
      });
      const componentInstance = dialogInstance.componentInstance;
      const dialogSubscription =
        componentInstance
          .closeCommand
          .subscribe(close => {
            dialogInstance.close();
            dialogSubscription.unsubscribe();
          });
    } else {
      this.zone.run(() => {
        this.router.navigate(['/app/config/create']);
      });
    }
  }
}
