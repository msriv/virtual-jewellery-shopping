import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../../event-emitter.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss'],
})
export class BillingComponent implements OnInit {
  opened: boolean = false;
  position: string = 'end';
  state: string[] = ['Products', 'Customer', 'Payments'];
  constructor(private eventEmitterService: EventEmitterService) {}

  ngOnInit(): void {
    if (this.eventEmitterService.subsVar == undefined) {
      this.eventEmitterService.subsVar = this.eventEmitterService.invokeStartBillingFunction.subscribe(
        (name: string) => {
          this.showBillingMenu();
        }
      );
    }
  }

  showBillingMenu() {
    this.opened = !this.opened;
  }
}
