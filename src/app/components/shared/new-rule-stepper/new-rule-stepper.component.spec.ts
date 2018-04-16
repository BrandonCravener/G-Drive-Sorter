import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRuleStepperComponent } from './new-rule-stepper.component';
import { AuthenticatedModule } from '../../../modules/authenticated/authenticated.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('NewRuleStepperComponent', () => {
  let component: NewRuleStepperComponent;
  let fixture: ComponentFixture<NewRuleStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        AuthenticatedModule
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
