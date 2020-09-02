import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, RouterEvent, NavigationCancel, NavigationStart, NavigationEnd } from '@angular/router';
import { ReplaySubject } from 'rxjs';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  const eventSubject = new ReplaySubject<RouterEvent>(1);

  const routeMock = {
    events: eventSubject.asObservable(),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [{ provide: Router, useValue: routeMock }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });


  it('should set loading to true when NavigationStart', () => {
    eventSubject.next(new NavigationStart(1, '/'));
    expect(component.loading).toBeTruthy();

  });

  it('should set loading to false when NavigationEnd', () => {
    eventSubject.next(new NavigationEnd(1, '/', ''));
    expect(component.loading).toBeFalsy();

  });

  it('should set loading to false when NavigationCancel', () => {
    eventSubject.next(new NavigationCancel(1, '/', ''));
    expect(component.loading).toBeFalsy();
  });

});
