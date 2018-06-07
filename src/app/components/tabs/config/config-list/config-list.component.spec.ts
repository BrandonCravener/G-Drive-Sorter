import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../../../../app.module';
import { ConfigModule } from '../../../../modules/config/config.module';
import { AuthenticatedModule } from '../../../../modules/authenticated/authenticated.module';
import { APP_BASE_HREF } from '@angular/common';
import { ConfigListComponent } from './config-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('ConfigListComponent', () => {
  let component: ConfigListComponent;
  let fixture: ComponentFixture<ConfigListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        ConfigModule,
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
    fixture = TestBed.createComponent(ConfigListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
