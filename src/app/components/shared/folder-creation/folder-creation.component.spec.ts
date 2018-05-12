import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderCreationComponent } from './folder-creation.component';
import { AppModule } from '../../../app.module';
import { AuthenticatedModule } from '../../../modules/authenticated/authenticated.module';
import { ConfigModule } from '../../../modules/config/config.module';
import { APP_BASE_HREF } from '@angular/common';

describe('FolderCreationComponent', () => {
  let component: FolderCreationComponent;
  let fixture: ComponentFixture<FolderCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, AuthenticatedModule, ConfigModule],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '/'
        }
      ]
    }).compileComponents();
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
