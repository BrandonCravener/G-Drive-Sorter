import { TestBed, inject } from '@angular/core/testing';

import { FirebaseService } from './firebase.service';
import { GoogleService } from '../google/google.service';

describe('FirebaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleService ,FirebaseService]
    });
  });

  it('should be created', inject([FirebaseService], (service: FirebaseService) => {
    expect(service).toBeTruthy();
  }));
});
