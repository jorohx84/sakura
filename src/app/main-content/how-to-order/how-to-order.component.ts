import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OrderStepsComponent } from './order-steps/order-steps.component';

@Component({
  selector: 'app-how-to-order',
  imports: [
    CommonModule,
    OrderStepsComponent,
  ],
  templateUrl: './how-to-order.component.html',
  styleUrl: './how-to-order.component.scss'
})
export class HowToOrderComponent {

}
