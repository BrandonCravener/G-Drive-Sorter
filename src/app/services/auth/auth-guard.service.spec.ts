import { AppModule } from '../../app.module';
import { AuthenticatedModule } from '../../modules/authenticated/authenticated.module';
import { AuthGuardService } from './auth-guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { inject, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

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
          useClass: class { navigate = jasmine.createSpy('navigate'); }
        }
      ],
    });
  });

  it('should be created', inject([AuthGuardService], (service: AuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
