import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishesDetailPage } from './dishes-detail.page';

describe('DishesDetailPage', () => {
  let component: DishesDetailPage;
  let fixture: ComponentFixture<DishesDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishesDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishesDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
