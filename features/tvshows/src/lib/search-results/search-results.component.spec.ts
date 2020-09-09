import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchResultsComponent } from './search-results.component';
import { Router, ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouteService } from '@mylib/core';
import { of } from 'rxjs';

describe('SearchResultsComponent', () => {
  let component: SearchResultsComponent;
  let fixture: ComponentFixture<SearchResultsComponent>;


  const routerMock = {
    navigate: jasmine.createSpy('navigate'),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchResultsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: Router,
          useValue: routerMock
        },
        {
          provide: RouteService, useValue: {
            getSearchResults: () =>
              of([]),
          }
        },
        {
          provide: ActivatedRoute,
          useValue: { queryParams: of(convertToParamMap({ phrase: 'abc' })) },
        },
      ],

    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(SearchResultsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to detail when cardClicked method is called', () => {
    const data = 1;
    const path = 'detail';
    component.cardClicked(data);
    expect(routerMock.navigate).toHaveBeenCalledWith([path, data]);
  });



});
