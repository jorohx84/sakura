import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderStepsComponent } from './order-steps.component';

describe('OrderStepsComponent', () => {
  let component: OrderStepsComponent;
  let fixture: ComponentFixture<OrderStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderStepsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
