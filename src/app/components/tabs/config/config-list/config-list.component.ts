import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Component, OnInit, ViewChild } from '@angular/core';
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

  private configCollection;
  private userID: string;

  noConfigs;
  dataSource: ConfigDataSource;
  oldPageSize: number = 10;
  tableColumns = ['name'];

  constructor(private firebase: AngularFirestore, private firebaseAuth: AngularFireAuth) {
    this.userID = firebaseAuth.auth.currentUser.uid;
    this.configCollection = firebase.doc(`users/${this.userID}`).collection('configs')
   }

  ngOnInit() {
    this.dataSource = new ConfigDataSource(this.configCollection, this.paginator);
    this.dataSource.numberConfigs(numConfigs => {
      if (numConfigs === 0) {
        this.noConfigs = true;
      }
    })  }
  
  ngAfterViewInit() {
    this.paginator.page.subscribe(() => {
      if (this.oldPageSize == this.paginator.pageSize) {
        this.dataSource.loadConfigs(this.paginator.pageIndex, this.paginator.pageSize);
      } else {
        this.dataSource.loadConfigs(0, this.paginator.pageSize);
        this.oldPageSize = this.paginator.pageSize;
        this.paginator.pageIndex = 0;
      }

    });
    this.dataSource.loadConfigs();
    this.dataSource.numberConfigs(numConfigs => {
      this.paginator.length = numConfigs;
    });
  }
}

export class ConfigDataSource implements DataSource<Config> {
  private configSubject = new BehaviorSubject<Config[]>([]);

  constructor (private configCollection, private paginator) {}

  connect(): Observable<Config[]> {
    return this.configSubject.asObservable();
  }

  disconnect(): void {
    return this.configSubject.complete();
  }

  private calculateStart(page: number, pageSize: number): number {
    return (page ? page * pageSize : 0);
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
          this.configSubject.next(data);
        }, err => console.error
      )
  }

  numberConfigs(cb: Function): void {
    this
      .configCollection
      .ref
      .get()
      .then(snapshot => {
        cb(snapshot.docs.length);
      })
  }
}