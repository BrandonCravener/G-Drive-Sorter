import { APP_BASE_HREF } from '@angular/common';
import { AppModule } from '../../../app.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthenticatedModule } from '../../../modules/authenticated/authenticated.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfigModule } from '../../../modules/config/config.module';
import { EditConfigPageComponent } from './edit-config-page.component';

describe('EditConfigPageComponent', () => {
  let component: EditConfigPageComponent;
  let fixture: ComponentFixture<EditConfigPageComponent>;

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
    fixture = TestBed.createComponent(EditConfigPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
