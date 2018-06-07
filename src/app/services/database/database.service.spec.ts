import { APP_BASE_HREF } from '@angular/common';
import { AppModule } from '../../app.module';
import { AuthenticatedModule } from '../../modules/authenticated/authenticated.module';
import { ConfigModule } from '../../modules/config/config.module';
import { DatabaseService } from './database.service';
import { inject, TestBed } from '@angular/core/testing';

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
