import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { GenrePageComponent } from './genre-page.component';
import { shows } from 'test/mock/models';

describe('GenrePageComponent', () => {
  let component: GenrePageComponent;
  let fixture: ComponentFixture<GenrePageComponent>;

  const routeMock = {
    snapshot: {
      paramMap: convertToParamMap({ id: '1' }),
      data: { shows }
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GenrePageComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: routeMock
        },
      ],
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(GenrePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));



  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
