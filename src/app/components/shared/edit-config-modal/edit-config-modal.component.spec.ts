import { APP_BASE_HREF } from '@angular/common';
import { AppModule } from '../../../app.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthenticatedModule } from '../../../modules/authenticated/authenticated.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfigModule } from '../../../modules/config/config.module';
import { EditConfigModalComponent } from './edit-config-modal.component';

describe('EditConfigModalComponent', () => {
  let component: EditConfigModalComponent;
  let fixture: ComponentFixture<EditConfigModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        ConfigModule,
        AuthenticatedModule,
        BrowserAnimationsModule
      ],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '/'
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditConfigModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
