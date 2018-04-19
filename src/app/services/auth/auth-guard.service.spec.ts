// Angular
import { Router } from '@angular/router';
import { TestBed, inject } from '@angular/core/testing';

// Modules
import { AppModule } from '../../app.module';
import { AuthenticatedModule } from '../../modules/authenticated/authenticated.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Services
import { AuthGuardService } from './auth-guard.service';

describe('AuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AuthenticatedModule,
        AppModule,
        BrowserAnimationsModule
      ],
      providers: [ 
        {
          provide: Router,
          useClass: class { navigate = jasmine.createSpy("navigate"); }
        }
      ],
    });
  });

  it('should be created', inject([AuthGuardService], (service: AuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
