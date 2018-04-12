// Angular
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';

// Modules
import { MatMenuModule, MatButtonModule, MatTabsModule, MatIconModule, MatToolbarModule, MatListModule, MatTooltipModule, MatTableModule, MatPaginatorModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ParallaxModule } from 'ngx-parallax';

// Components
import { SettingsComponent } from './settings.component';
import { AppComponent } from '../../../app.component';
import { UnauthenticatedComponent } from '../../auth/unauthenticated/unauthenticated.component';
import { HomeComponent } from '../home/home.component';
import { ConfigComponent } from '../config/config.component';
import { ConfigListComponent } from '../config/config-list/config-list.component';

// Services
import { GoogleService } from '../../../services/google/google.service';

// Utils
import { appRoutes } from '../../../app.routes';
import { environment } from '../../../../environments/environment.prod';

// Angularfire
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        AppComponent,
        SettingsComponent,
        HomeComponent,
        ConfigListComponent,
        ConfigComponent,
        UnauthenticatedComponent
      ],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFirestoreModule,
        MatMenuModule,
        MatButtonModule,
        MatTabsModule,
        MatIconModule,
        ParallaxModule,
        MatListModule,
        MatTooltipModule,
        MatToolbarModule,
        MatTableModule,
        MatPaginatorModule,
        RouterModule.forRoot(
          appRoutes
        )
      ],
      providers: [ GoogleService, {provide: 
        APP_BASE_HREF, 
        useValue: '/'
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
