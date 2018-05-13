import { AngularFireAuth } from 'angularfire2/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { BehaviorSubject } from 'rxjs';
import { Component, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ConfigComponent } from '../config.component';
import { createDirective } from '@angular/compiler/src/core';
import { DatabaseService } from '../../../../services/firebase/database.service';
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

export interface Config {
  name: String;
  key: String;
}

@Component({
  selector: 'app-config-list',
  templateUrl: './config-list.component.html',
  styleUrls: ['./config-list.component.scss']
})
export class ConfigListComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  private userID: string;
  private configCollection;
  private activeConfig: string;
  private oldPageSize: number = 10;
  private loadingSubscription: Subscription;
  private paginatorSubscription: Subscription;
  private configChangeSubscription: Subscription;
  private activeConfigChangeSubscription: Subscription;

  public loading: boolean = true;
  public noConfigs: boolean = true;
  public dataSource: ConfigDataSource;
  public tableColumns = ['name', 'actions'];

  constructor(
    private firebaseAuth: AngularFireAuth,
    private firebase: AngularFirestore,
    private database: DatabaseService,
    private dialog: MatDialog,
    private router: Router,
    private zone: NgZone
  ) {}

  ngOnInit() {
    if (this.firebaseAuth.auth.currentUser) {
      this.userID = this.firebaseAuth.auth.currentUser.uid;
      this.configCollection = this.firebase
        .doc(`users/${this.userID}`)
        .collection('configs');
      this.dataSource = new ConfigDataSource(
        this.configCollection,
        this.paginator
      );
      this.database.numberConfigs(numConfigs => {
        if (numConfigs === 0) {
          this.noConfigs = true;
        } else {
          this.noConfigs = false;
        }
      });
    }
  }

  ngAfterViewInit() {
    if (this.firebaseAuth.auth.currentUser) {
      // Listen for page changes
      this.paginatorSubscription = this.paginator.page.subscribe(() => {
        if (this.oldPageSize == this.paginator.pageSize) {
          this.dataSource.loadConfigs(
            this.paginator.pageIndex,
            this.paginator.pageSize
          );
        } else {
          this.dataSource.loadConfigs(0, this.paginator.pageSize);
          this.oldPageSize = this.paginator.pageSize;
          this.paginator.pageIndex = 0;
        }
      });
      // Load the configurations
      this.dataSource.loadConfigs();
      // Pass the number of configs to the paginator
      this.database.numberConfigs(numConfigs => {
        this.paginator.length = numConfigs;
      });
      // Listen for config changes
      this.configChangeSubscription = this.database.configSubject.subscribe(
        created => {
          this.refreshConfigs();
        }
      );
      // Retrive the active config
      this.database.getActiveConfig(activeConfig => {
        this.activeConfig = activeConfig;
      });
      // Listen for active config changes
      this.activeConfigChangeSubscription = this.database.activeConfigChanged.subscribe(
        newConfigID => {
          this.activeConfig = newConfigID;
        },
        err => console.error
      );
      setTimeout(_ => {
        // Listen for loading state changes
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
    let dialogWidth = this.getDialogWidth();
    if (dialogWidth) {
      const dialogInstance = this.dialog.open(PresetConfigComponent, {
        width: `${dialogWidth}px`,
        maxHeight: `${document.body.clientHeight * 0.9}px`
      });
      const componentInstance = dialogInstance.componentInstance;
      let closeSubscription = componentInstance.closeCommand.subscribe(
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
    this.dataSource.loadConfigs();
    this.database.numberConfigs(numConfigs => {
      if (numConfigs === 0) {
        this.noConfigs = true;
      } else {
        this.noConfigs = false;
      }
    });
  }

  editConfig(configID: string) {
    this.database.editingConfig = configID;
    let dialogWidth = this.getDialogWidth();
    if (dialogWidth) {
      const dialogInstance = this.dialog.open(EditConfigModalComponent, {
        width: `${dialogWidth}px`,
        maxHeight: `${document.body.clientHeight * 0.9}px`
      });
      const componentInstance = dialogInstance.componentInstance;
      let closeSubscription = componentInstance.closeCommand.subscribe(
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
    this.loadingSubscription.unsubscribe();
    this.paginatorSubscription.unsubscribe();
    this.configChangeSubscription.unsubscribe();
    this.activeConfigChangeSubscription.unsubscribe();
  }
}

export class ConfigDataSource implements DataSource<Config> {
  private configSubject = new BehaviorSubject<Config[]>([]);

  private loadingSubject = new BehaviorSubject<boolean>(true);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private configCollection, private paginator) {}

  private calculateStart(page: number, pageSize: number): number {
    return page ? page * pageSize : 0;
  }

  connect(): Observable<Config[]> {
    return this.configSubject.asObservable();
  }

  disconnect(): void {
    this.configSubject.complete();
    this.loadingSubject.complete();
  }

  loadConfigs(page: number = 0, pageSize: number = 10) {
    this.loadingSubject.next(true);
    this.configCollection.ref
      .orderBy('name')
      .startAt(this.calculateStart(page, pageSize))
      .limit(pageSize)
      .get()
      .then(snapshot => {
        const configs = snapshot.docs;
        let data = [];
        for (const config in configs) {
          const name = configs[config].data()['name'];
          data.push({
            name: name,
            key: configs[config].id
          });
        }
        this.configSubject.next(data);
        this.loadingSubject.next(false);
      }, err => console.error);
  }
}
