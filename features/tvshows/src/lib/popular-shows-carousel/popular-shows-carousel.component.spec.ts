import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularShowsCarouselComponent } from './popular-shows-carousel.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('PopularShowsCarouselComponent', () => {
  let component: PopularShowsCarouselComponent;
  let fixture: ComponentFixture<PopularShowsCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PopularShowsCarouselComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularShowsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
