import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreCollectionComponent } from './genre-collection.component';

describe('GenreCollectionComponent', () => {
  let component: GenreCollectionComponent;
  let fixture: ComponentFixture<GenreCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GenreCollectionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
