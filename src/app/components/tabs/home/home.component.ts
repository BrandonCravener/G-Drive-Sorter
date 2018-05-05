import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../../services/firebase/database.service';
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
export class HomeComponent implements OnInit {
  
  public isActiveConfig: boolean = false;
  public activeConfigName: string = 'Loading...'

  /**
   * Creates an instance of HomeComponent.
   * @memberof HomeComponent
   */
  constructor(
    private database: DatabaseService,
    private sorterService: SorterService
  ) { }

  /**
   * Handle component initalization
   * 
   * @memberof HomeComponent
   */
  ngOnInit() {
    if (this.database.userID) {
      this.database.getActiveConfig(activeConfig => {
        if (activeConfig) {
          this.database.getConfig(activeConfig, config => {
            this.activeConfigName = config.name;
          });
          this.isActiveConfig = true;
        } else {
          this.activeConfigName = 'No active configuration!'
          this.isActiveConfig = false;
        }
      });
    }
  }

  sortUsersDrive() {
    this.sorterService.test();
  }

}
