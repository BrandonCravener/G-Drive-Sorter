import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConfigPageComponent } from './edit-config-page.component';

describe('EditConfigPageComponent', () => {
  let component: EditConfigPageComponent;
  let fixture: ComponentFixture<EditConfigPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditConfigPageComponent ]
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
