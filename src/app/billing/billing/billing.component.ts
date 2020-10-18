import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss'],
})
export class BillingComponent implements OnInit {
  opened: boolean = false;
  position: string = 'end';
  state: string[] = ['Products', 'Customer', 'Payments'];
  constructor() {}

  ngOnInit(): void {}

  showBillingMenu() {
    this.opened = !this.opened;
  }
}
