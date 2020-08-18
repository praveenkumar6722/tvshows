import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailsPageComponent } from './show-details-page.component';

describe('ShowDetailsPageComponent', () => {
  let component: ShowDetailsPageComponent;
  let fixture: ComponentFixture<ShowDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDetailsPageComponent ]
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
