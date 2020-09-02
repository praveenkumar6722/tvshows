import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  const router = {
    navigate: jasmine.createSpy('navigate'),
  };

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [HeaderComponent],
      providers: [
        { provide: Router, useValue: router },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to search when method search is called with search string', () => {
    component.searchString = 'fire';
    component.search();
    expect(router.navigate).toHaveBeenCalledWith(['search'], { queryParams: { phrase: 'fire' } });
  });

  it('should not navigate to search when method search is called with empty search string', () => {
    component.searchString = '';
    component.search();
    expect(router.navigate).not.toHaveBeenCalledWith(['search'], { queryParams: { phrase: 'fire' } });
  });

});
