import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DatabaseService } from '../../../../services/firebase/database.service';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/Observable';

export interface Config {
  name: String,
  key: String
}

@Component({
  selector: 'app-config-list',
  templateUrl: './config-list.component.html',
  styleUrls: ['./config-list.component.scss']
})
export class ConfigListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  private userID: string;
  private configCollection;
  private oldPageSize: number = 10;
  
  public tableColumns = ['name', 'actions'];
  public noConfigs: boolean = true;
  public dataSource: ConfigDataSource;

  constructor(
    private firebase: AngularFirestore, 
    private firebaseAuth: AngularFireAuth,
    private database: DatabaseService
  ) { }

  ngOnInit() {
    if (this.firebaseAuth.auth.currentUser) {
      this
        .userID = this
        .firebaseAuth
        .auth
        .currentUser
        .uid;
      this
        .configCollection = this 
        .firebase
        .doc(`users/${this.userID}`)
        .collection('configs');
      this
        .dataSource = new ConfigDataSource(this.configCollection, this.paginator);
      this
        .database
        .numberConfigs(numConfigs => {
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
      this
        .paginator
        .page
        .subscribe(() => {
          if (this.oldPageSize == this.paginator.pageSize) {
            this
              .dataSource
              .loadConfigs(
                this.paginator.pageIndex, 
                this.paginator.pageSize
              );
          } else {
            this
              .dataSource
              .loadConfigs(
                0, 
                this.paginator.pageSize
              );
            this.oldPageSize = this.paginator.pageSize;
            this.paginator.pageIndex = 0;
          }
        });
       // Load the configurations
      this.dataSource.loadConfigs();
      // Pass the number of configs to the paginator
      this
        .database
        .numberConfigs(numConfigs => {
          this.paginator.length = numConfigs;
        });
        this
        .database
        .configSubject
        .subscribe(created => {
          if (created) {
            this.refreshConfigs();
          } else {

          }
        });
    }
  }

  refreshConfigs() {
    this.dataSource.loadConfigs();
    this
      .database
      .numberConfigs(numConfigs => {
        if (numConfigs === 0) {
          this.noConfigs = true;
        } else {
          this.noConfigs = false;
        }
      });
  }
  
  deleteConfig(configKey: string) {
    this.database.deleteConfig(configKey);
  }

  setActiveConfig(configKey: string) {
    this.database.setActiveConfig(configKey);
  }

  getActiveConfig(configKey: string) {
    this.database.getActiveConfig(activeConfig => {
      if (configKey === activeConfig) {
        return true;
      } else {
        return false;
      }
    });
  }
}

export class ConfigDataSource implements DataSource<Config> {
  private configSubject = new BehaviorSubject<Config[]>([]);

  constructor (
    private configCollection, 
    private paginator
  ) {}

  private calculateStart(page: number, pageSize: number): number {
    return (page ? page * pageSize : 0);
  }

  connect(): Observable<Config[]> {
    return this.configSubject.asObservable();
  }

  disconnect(): void {
    return this
      .configSubject
      .complete();
  }

  loadConfigs(page: number = 0, pageSize: number = 10) {
    this
      .configCollection
      .ref
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
            })
          }
          this
            .configSubject
            .next(data);
        }, err => console.error
      )
  }
}