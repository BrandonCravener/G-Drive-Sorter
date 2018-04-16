// Angular imports
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Component imports
import { ConfigComponent } from '../config.component';
import { HomeComponent } from '../../home/home.component';
import { ConfigModalComponent } from './config-modal.component';
import { SettingsComponent } from '../../settings/settings.component';
import { ConfigListComponent } from '../config-list/config-list.component';
import { NewRuleStepperComponent } from '../../../shared/new-rule-stepper/new-rule-stepper.component';
import { AuthenticatedModule } from '../../../../modules/authenticated/authenticated.module';
import { MatDialogRef } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ConfigModalComponent', () => {
  let component: ConfigModalComponent;
  let fixture: ComponentFixture<ConfigModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        AuthenticatedModule
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
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
