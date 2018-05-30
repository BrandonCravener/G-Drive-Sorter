import { TestBed, inject } from '@angular/core/testing';
import { environment } from '../../../environments/environment';
import { GoogleService } from './google.service';
import { AppModule } from '../../app.module';
import { APP_BASE_HREF } from '@angular/common';

describe('GoogleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '/'
        }
      ]
    });
  });

  it('should be created', inject([GoogleService], (service: GoogleService) => {
    expect(service).toBeTruthy();
  }));
});
