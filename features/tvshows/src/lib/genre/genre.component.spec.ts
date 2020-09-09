import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';

import { GenreComponent } from './genre.component';

describe('GenreComponent', () => {
  let component: GenreComponent;
  let fixture: ComponentFixture<GenreComponent>;
  const routerMock = {
    navigate: jasmine.createSpy('navigate'),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GenreComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: Router, useValue: routerMock },
      ],
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(GenreComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to /detail when method cardClicked is called', () => {
    const data = 1;
    const path = 'detail';
    component.cardClicked(data);
    expect(routerMock.navigate).toHaveBeenCalledWith([path, data]);
  });


});
