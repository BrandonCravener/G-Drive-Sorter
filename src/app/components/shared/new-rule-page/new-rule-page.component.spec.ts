import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRulePageComponent } from './new-rule-page.component';

describe('NewRulePageComponent', () => {
  let component: NewRulePageComponent;
  let fixture: ComponentFixture<NewRulePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRulePageComponent ]
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
