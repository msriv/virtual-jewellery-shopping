import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss'],
})
export class PaymentMethodComponent implements OnInit {
  storeVisible: boolean = false;
  value: string;
  constructor() {}

  ngOnInit(): void {}

  showStores(event) {
    if (event.target.value == 'store') {
      this.storeVisible = !this.storeVisible;
    } else {
      this.storeVisible = false;
    }
  }
}
