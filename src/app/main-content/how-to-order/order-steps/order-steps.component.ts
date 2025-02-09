import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-steps',
  imports: [],
  templateUrl: './order-steps.component.html',
  styleUrl: './order-steps.component.scss'
})
export class OrderStepsComponent {
  @Input() image: string = '';
  @Input() text: string = '';

}
