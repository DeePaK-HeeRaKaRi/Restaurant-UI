import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCategoryComponent } from './ui-category.component';

describe('UiCategoryComponent', () => {
  let component: UiCategoryComponent;
  let fixture: ComponentFixture<UiCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
