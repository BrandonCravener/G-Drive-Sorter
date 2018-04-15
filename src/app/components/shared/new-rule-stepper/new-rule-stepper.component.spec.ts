import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRuleStepperComponent } from './new-rule-stepper.component';

describe('NewRuleStepperComponent', () => {
  let component: NewRuleStepperComponent;
  let fixture: ComponentFixture<NewRuleStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRuleStepperComponent ]
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
