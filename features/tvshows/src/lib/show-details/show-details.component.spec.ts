import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowDetailsComponent } from './show-details.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ShowDetailsComponent', () => {
  let component: ShowDetailsComponent;
  let fixture: ComponentFixture<ShowDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShowDetailsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(ShowDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
