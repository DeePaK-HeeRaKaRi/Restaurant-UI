import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersProductsComponent } from './customers-products.component';

describe('CustomersProductsComponent', () => {
  let component: CustomersProductsComponent;
  let fixture: ComponentFixture<CustomersProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
