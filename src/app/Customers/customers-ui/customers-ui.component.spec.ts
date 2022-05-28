import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersUiComponent } from './customers-ui.component';

describe('CustomersUiComponent', () => {
  let component: CustomersUiComponent;
  let fixture: ComponentFixture<CustomersUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
