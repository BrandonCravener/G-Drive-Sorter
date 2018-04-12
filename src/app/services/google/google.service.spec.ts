// Angular
import { TestBed, inject } from '@angular/core/testing';

// utils
import { environment } from '../../../environments/environment';

// Services
import { GoogleService } from './google.service';

// Angularfire
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

describe('GoogleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFirestoreModule
      ],
      providers: [GoogleService]
    });
  });

  it('should be created', inject([GoogleService], (service: GoogleService) => {
    expect(service).toBeTruthy();
  }));
});
