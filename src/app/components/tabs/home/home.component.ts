import { Component, NgZone, AfterViewInit } from '@angular/core';
import { DatabaseService } from '../../../services/firebase/database.service';
import { MatSnackBar } from '@angular/material';
import { SorterService } from '../../../services/sorter/sorter.service';
import { Router } from '@angular/router';

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
  public isActiveConfig: boolean = false;
  public activeConfigName: string = 'Loading...';

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
    let databaseInitalizedCheck = setInterval(() => {
      if (this.database.initalized) {
        this.database.getActiveConfig(activeConfig => {
          if (activeConfig) {
            this.database.getConfig(activeConfig, config => {
              this.activeConfigName = config.name;
            });
            this.isActiveConfig = true;
          } else {
            this.activeConfigName = 'No active configuration!';
            this.isActiveConfig = false;
          }
        });
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
