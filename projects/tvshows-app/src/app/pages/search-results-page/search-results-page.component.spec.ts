import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsPageComponent } from './search-results-page.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SearchResultsPageComponent', () => {
  let component: SearchResultsPageComponent;
  let fixture: ComponentFixture<SearchResultsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchResultsPageComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
