import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';

import { RouteService } from '@mylib/core';

import { ShowDetailsPageComponent } from './show-details-page.component';

describe('ShowDetailsPageComponent', () => {
  let component: ShowDetailsPageComponent;
  let fixture: ComponentFixture<ShowDetailsPageComponent>;

  const routeServiceMock = {
    getShowDetails: () => of([]),
  };

  const routeMock = {
    snapshot: {
      paramMap: convertToParamMap({ id: '1' })
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShowDetailsPageComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: RouteService, useValue: routeServiceMock },
        {
          provide: ActivatedRoute,
          useValue: routeMock
        },
      ]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(ShowDetailsPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
