import { APP_BASE_HREF } from '@angular/common';
import { AppModule } from '../../../app.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthenticatedModule } from '../../../modules/authenticated/authenticated.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewConfigPageComponent } from './new-config-page.component';

describe('NewConfigPageComponent', () => {
  let component: NewConfigPageComponent;
  let fixture: ComponentFixture<NewConfigPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        AppModule,
        AuthenticatedModule
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
    fixture = TestBed.createComponent(NewConfigPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
