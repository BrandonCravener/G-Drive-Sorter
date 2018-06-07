import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { appRoutes } from './app.routes';
import { Router } from '@angular/router';

class Page {
  get logoSource() {
    return this.query<HTMLImageElement>('.toolbar-logo');
  }

  constructor(fixture: ComponentFixture<AppComponent>) {}

  private query<T>(selector: string): T {
    return fixture.nativeElement.querySelector(selector);
  }

  private queryAll<T>(selector: string): T[] {
    return fixture.nativeElement.querySelectorAll(selector);
  }
}

let component: AppComponent;
let fixture: ComponentFixture<AppComponent>;

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule.withRoutes(appRoutes)]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
  it('should render app icon', () => {
    expect(fixture.nativeElement.querySelector('.toolbar-logo').src).toContain(
      'assets/images/icon.png'
    );
  });
});
