import { TestBed, inject } from '@angular/core/testing';

import { SorterService } from './sorter.service';
import { AppModule } from '../../app.module';
import { ConfigModule } from '../../modules/config/config.module';
import { AuthenticatedModule } from '../../modules/authenticated/authenticated.module';
import { APP_BASE_HREF } from '@angular/common';

describe('SorterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        ConfigModule,
        AuthenticatedModule
      ],
      providers: [
        {
          provide: APP_BASE_HREF, 
          useValue: '/'
        }
      ]
    });
  });

  it('should be created', inject([SorterService], (service: SorterService) => {
    expect(service).toBeTruthy();
  }));
});
