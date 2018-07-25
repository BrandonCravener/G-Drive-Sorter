import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';
import { Config, ConfigsInterface } from 'src/interfaces';

import { DatabaseService } from '../services/database/database.service';

export class ConfigDataSource implements DataSource<Config> {
  private loadingSubject = new BehaviorSubject<boolean>(true);
  private configSubject = new BehaviorSubject<Config[]>([]);
  private configs: Array<ConfigsInterface>;

  public loading$ = this.loadingSubject.asObservable();

  constructor(private paginator, private database: DatabaseService) {}

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
    this.configs = this.database.getConfigs();
    const start = this.calculateStart(page, pageSize);
    const configs = this.configs.slice(start, start + pageSize);
    const data = [];
    for (const config in configs) {
      if (configs[config].id && configs[config].name) {
        const name = configs[config]['name'];
        data.push({
          name: name,
          key: configs[config].id
        });
      }
    }
    this.configSubject.next(data);
    this.loadingSubject.next(false);
  }
}
