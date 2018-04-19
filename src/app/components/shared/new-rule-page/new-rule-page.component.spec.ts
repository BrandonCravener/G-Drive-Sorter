// Angular imports
import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Component imports
import { NewRulePageComponent } from './new-rule-page.component';

// Module imports
import { AppModule } from '../../../app.module';
import { AuthenticatedModule } from '../../../modules/authenticated/authenticated.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('NewRulePageComponent', () => {
  let component: NewRulePageComponent;
  let fixture: ComponentFixture<NewRulePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        AppModule,
        AuthenticatedModule
      ],
      providers: [
        {provide: 
          APP_BASE_HREF, 
          useValue: '/'
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRulePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
