import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresetConfigComponent } from './preset-config.component';
import { AppModule } from '../../../../app.module';
import { ConfigModule } from '../../../../modules/config/config.module';
import { AuthenticatedModule } from '../../../../modules/authenticated/authenticated.module';
import { APP_BASE_HREF } from '@angular/common';

describe('PresetConfigComponent', () => {
  let component: PresetConfigComponent;
  let fixture: ComponentFixture<PresetConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        ConfigModule,
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
    fixture = TestBed.createComponent(PresetConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
