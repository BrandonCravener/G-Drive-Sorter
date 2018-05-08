import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderCreationComponent } from './folder-creation.component';

describe('FolderCreationComponent', () => {
  let component: FolderCreationComponent;
  let fixture: ComponentFixture<FolderCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FolderCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
