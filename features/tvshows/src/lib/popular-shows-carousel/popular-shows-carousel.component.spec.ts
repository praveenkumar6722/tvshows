import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularShowsCarouselComponent } from './popular-shows-carousel.component';

describe('PopularShowsCarouselComponent', () => {
  let component: PopularShowsCarouselComponent;
  let fixture: ComponentFixture<PopularShowsCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularShowsCarouselComponent ]
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
