import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailsPageComponent } from './show-details-page.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { RouteService } from 'core/src/public-api';
import { RouterTestingModule } from '@angular/router/testing';

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
      // imports: [RouterTestingModule.withRoutes([])],
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
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
