// Angular imports
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Module imports
import { AppModule } from '../../../app.module';
import { AuthenticatedModule } from '../../../modules/authenticated/authenticated.module';

// Componet imports
import { NewRuleStepperComponent } from './new-rule-stepper.component';

describe('NewRuleStepperComponent', () => {
  let component: NewRuleStepperComponent;
  let fixture: ComponentFixture<NewRuleStepperComponent>;

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
    fixture = TestBed.createComponent(NewRuleStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
