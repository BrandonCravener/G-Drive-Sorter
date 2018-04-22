import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { environment } from '../../../../environments/environment.prod';
import { GoogleService } from '../../../services/google/google.service';
import { UnauthenticatedComponent } from './unauthenticated.component';

describe('UnauthenticatedComponent', () => {
  let component: UnauthenticatedComponent;
  let fixture: ComponentFixture<UnauthenticatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnauthenticatedComponent ],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFirestoreModule
      ],
      providers: [GoogleService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnauthenticatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
