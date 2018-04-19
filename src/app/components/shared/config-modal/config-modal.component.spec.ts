// Angular imports
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Component imports
import { ConfigModalComponent } from './config-modal.component';

// Material
import { MatDialogRef } from '@angular/material';

// Module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticatedModule } from '../../../modules/authenticated/authenticated.module';
import { AppModule } from '../../../app.module';

describe('ConfigModalComponent', () => {
  let component: ConfigModalComponent;
  let fixture: ComponentFixture<ConfigModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
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
    fixture = TestBed.createComponent(ConfigModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
