import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCardComponent } from './show-card.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ShowCardComponent', () => {
  let component: ShowCardComponent;
  let fixture: ComponentFixture<ShowCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShowCardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
