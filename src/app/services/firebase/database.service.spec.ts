import { TestBed, inject } from '@angular/core/testing';

import { DatabaseService } from './database.service';
import { AppModule } from '../../app.module';
import { AuthenticatedModule } from '../../modules/authenticated/authenticated.module';
import { ConfigModule } from '../../modules/config/config.module';
import { APP_BASE_HREF } from '@angular/common';

describe('DatabaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        ConfigModule,
        AuthenticatedModule
      ],
      providers: [
        DatabaseService,
        {
          provide: APP_BASE_HREF, 
          useValue: '/'
        }
      ]
    });
  });

  it('should be created', inject([DatabaseService], (service: DatabaseService) => {
    expect(service).toBeTruthy();
  }));
});
