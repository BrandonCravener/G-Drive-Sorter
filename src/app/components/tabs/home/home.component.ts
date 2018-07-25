import { AfterViewInit, Component, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import { DatabaseService } from '../../../services/database/database.service';
import { SorterService } from '../../../services/sorter/sorter.service';

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
export class HomeComponent implements AfterViewInit {
  public isActiveConfig = false;
  public activeConfigName = 'Loading...';

  /**
   * Creates an instance of HomeComponent.
   * @memberof HomeComponent
   */
  constructor(
    private zone: NgZone,
    private router: Router,
    private snackBar: MatSnackBar,
    private database: DatabaseService,
    private sorterService: SorterService
  ) {}

  /**
   * Handle component initalization
   *
   * @memberof HomeComponent
   */
  ngAfterViewInit() {
    const databaseInitalizedCheck = setInterval(() => {
      if (this.database.initalized) {
        this.database.getActiveConfig().then(
          activeConfig => {
            this.database.getConfig(activeConfig, config => {
              this.activeConfigName = config.name;
            });
            this.isActiveConfig = true;
          },
          err => {
            this.activeConfigName = err;
            this.isActiveConfig = false;
          }
        );
        clearInterval(databaseInitalizedCheck);
      }
    }, 750);
  }

  sortUsersDrive() {
    this.sorterService.sort().then(() => {
      this.snackBar.open('Google Drive sorted!', 'OK', {
        duration: 5000
      });
    }, err => console.error);
  }

  goToConfigPage() {
    this.zone.run(() => {
      this.router.navigateByUrl('/app/config');
    });
  }
}
