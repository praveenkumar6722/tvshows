import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenereCollectionComponent } from './genere-collection.component';

describe('GenereCollectionComponent', () => {
  let component: GenereCollectionComponent;
  let fixture: ComponentFixture<GenereCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenereCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenereCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
