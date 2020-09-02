import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';

import { GenreCollectionComponent } from './genre-collection.component';

describe('GenreCollectionComponent', () => {
  let component: GenreCollectionComponent;
  let fixture: ComponentFixture<GenreCollectionComponent>;
  const routerMock = {
    navigate: jasmine.createSpy('navigate'),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GenreCollectionComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: Router, useValue: routerMock },
      ],
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(GenreCollectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to "genre" when method viewAll is called', () => {
    const data = 'action';
    const path = 'genre';
    component.viewAll(data);
    expect(routerMock.navigate).toHaveBeenCalledWith([path, data]);
  });
});
