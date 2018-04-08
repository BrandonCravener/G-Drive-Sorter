import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';

import { DataSource } from '@angular/cdk/collections';

// Rx Imports
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// Services
import { FirebaseService } from '../../../../services/firebase/firebase.service';

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

  dataSource: ConfigDataSource;

  oldPageSize: number = 10;

  tableColumns = ['name'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private firebase: FirebaseService) { }

  ngOnInit() {
    this.dataSource = new ConfigDataSource(this.firebase, this.paginator);
  }
  
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
    this.dataSource.numberConfigs();
  }

}

export class ConfigDataSource implements DataSource<Config> {
  private configSubject = new BehaviorSubject<Config[]>([]);

  constructor (private firebase: FirebaseService, private paginator) {}

  connect(): Observable<Config[]> {
    return this.configSubject.asObservable();
  }

  disconnect(): void {
    return this.configSubject.complete();
  }

  loadConfigs(page: number = 0, pageSize: number = 10) {
    this.firebase.getUserConfigs(page, pageSize).then(snapshot => {
      let configs = snapshot.val();
      let data = [];
      for (const config in configs) {
        if (configs.hasOwnProperty(config)) {
          const name = configs[config]['name'];
          data.push({
            name: name,
            key: config
          })
        }
      }
      this.configSubject.next(data);
    }, console.error)
  }

  numberConfigs() {
    this.firebase.getNumConfigs().then(snapshot => {
      this.paginator.length = snapshot.numChildren();
    }, console.error)
  }

}