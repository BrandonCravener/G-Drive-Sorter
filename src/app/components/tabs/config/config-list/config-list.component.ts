import { BehaviorSubject } from 'rxjs';
import {
  Component,
  NgZone,
  OnDestroy,
  OnInit,
  ViewChild,
  ChangeDetectorRef,
  AfterViewInit
} from '@angular/core';
import { ConfigComponent } from '../config.component';
import { createDirective } from '@angular/compiler/src/core';
import { DatabaseService } from '../../../../services/database/database.service';
import { DataSource } from '@angular/cdk/collections';
import { EditConfigModalComponent } from '../../../shared/edit-config-modal/edit-config-modal.component';
import {
  MatDialog,
  MatPaginator,
  MatTable,
  MatTableDataSource
} from '@angular/material';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PresetConfigComponent } from '../preset-config/preset-config.component';
import { GoogleService } from '../../../../services/google/google.service';
import { ConfigsInterface } from '../../../../../interfaces';
import { ConfigDataSource } from '../../../../classes/config-data-source';

@Component({
  selector: 'app-config-list',
  templateUrl: './config-list.component.html',
  styleUrls: ['./config-list.component.scss']
})
export class ConfigListComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  private activeConfig: string;
  private oldPageSize = 10;
  private loadingSubscription: Subscription;
  private paginatorSubscription: Subscription;
  private configChangeSubscription: Subscription;
  private activeConfigChangeSubscription: Subscription;

  public loading = true;
  public noConfigs = true;
  public dataSource: ConfigDataSource;
  public tableColumns = ['name', 'actions'];

  constructor(
    private changeDetector: ChangeDetectorRef,
    private database: DatabaseService,
    private google: GoogleService,
    private dialog: MatDialog,
    private router: Router,
    private zone: NgZone
  ) {}

  ngOnInit() {
    if (this.google.getAuthStatus()) {
      this.dataSource = new ConfigDataSource(this.paginator, this.database);
      this.database.numberConfigs().then(numConfigs => {
        if (numConfigs === 0) {
          this.noConfigs = true;
        } else {
          this.noConfigs = false;
        }
      });
    }
  }

  ngAfterViewInit() {
    if (this.google.getAuthStatus()) {
      // Listen for page changes
      this.paginatorSubscription = this.paginator.page.subscribe(() => {
        if (this.oldPageSize === this.paginator.pageSize) {
          this.dataSource.loadConfigs(
            this.paginator.pageIndex,
            this.paginator.pageSize
          );
          this.changeDetector.detectChanges();
        } else {
          this.dataSource.loadConfigs(0, this.paginator.pageSize);
          this.changeDetector.detectChanges();
          this.oldPageSize = this.paginator.pageSize;
          this.paginator.pageIndex = 0;
        }
      });
      // Load the configurations
      this.dataSource.loadConfigs();
      this.changeDetector.detectChanges();
      // Pass the number of configs to the paginator
      this.database.numberConfigs().then(numConfigs => {
        this.paginator.length = numConfigs;
      });
      // Listen for config changes
      this.configChangeSubscription = this.database.configSubject.subscribe(
        created => {
          this.refreshConfigs();
          this.loading = false;
        }
      );
      // Retrive the active config
      this.database.getActiveConfig().then(
        activeConfig => {
          this.activeConfig = activeConfig;
        },
        () => {
          this.activeConfig = undefined;
        }
      );
      // Listen for active config changes
      this.activeConfigChangeSubscription = this.database.activeConfigChanged.subscribe(
        newConfigID => {
          this.activeConfig = newConfigID;
        },
        err => console.error
      );
      setTimeout(_ => {
        this.loadingSubscription = this.dataSource.loading$.subscribe(
          loading => {
            this.loading = loading;
          }
        );
      });
    }
  }

  getDialogWidth() {
    const width: number = document.body.clientWidth;
    if (width >= 1280) {
      return width / 2;
    } else if (width >= 640) {
      return width / 1.5;
    } else {
      return 0;
    }
  }

  openPresets() {
    const dialogWidth = this.getDialogWidth();
    if (dialogWidth) {
      const dialogInstance = this.dialog.open(PresetConfigComponent, {
        width: `${dialogWidth}px`,
        maxHeight: `${document.body.clientHeight * 0.9}px`
      });
      const componentInstance = dialogInstance.componentInstance;
      const closeSubscription = componentInstance.closeCommand.subscribe(
        close => {
          dialogInstance.close();
          closeSubscription.unsubscribe();
        }
      );
    } else {
      this.zone.run(() => {
        this.router.navigate(['/app/config/presets']);
      });
    }
  }

  refreshConfigs() {
    this.loading = true;
    this.dataSource.loadConfigs();
    this.changeDetector.detectChanges();
    this.database.numberConfigs().then(numConfigs => {
      if (numConfigs === 0) {
        this.noConfigs = true;
      } else {
        this.noConfigs = false;
      }
      this.paginator.length = numConfigs;
    });
  }

  editConfig(configID: string) {
    this.database.editingConfig = configID;
    const dialogWidth = this.getDialogWidth();
    if (dialogWidth) {
      const dialogInstance = this.dialog.open(EditConfigModalComponent, {
        width: `${dialogWidth}px`,
        maxHeight: `${document.body.clientHeight * 0.9}px`
      });
      const componentInstance = dialogInstance.componentInstance;
      const closeSubscription = componentInstance.closeCommand.subscribe(
        close => {
          dialogInstance.close();
          closeSubscription.unsubscribe();
        }
      );
    } else {
      this.zone.run(() => {
        this.router.navigate(['/app/config/edit']);
      });
    }
  }

  deleteConfig(configKey: string) {
    this.loading = true;
    if (configKey === this.activeConfig) {
      this.setActiveConfig('');
    }
    this.database.deleteConfig(configKey);
  }

  setActiveConfig(configKey: string) {
    this.database.setActiveConfig(configKey);
  }

  getActiveConfig(configKey: string): boolean {
    return this.activeConfig === configKey ? true : false;
  }

  ngOnDestroy() {
    if (this.loadingSubscription) {
      this.loadingSubscription.unsubscribe();
    }
    if (this.paginatorSubscription) {
      this.paginatorSubscription.unsubscribe();
    }
    if (this.configChangeSubscription) {
      this.configChangeSubscription.unsubscribe();
    }
    if (this.activeConfigChangeSubscription) {
      this.activeConfigChangeSubscription.unsubscribe();
    }
  }
}
