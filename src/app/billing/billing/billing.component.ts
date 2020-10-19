import { Component, Input, OnInit } from '@angular/core';
import { EventEmitterService } from '../../event-emitter.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss'],
})
export class BillingComponent implements OnInit {
  @Input() visible: number;

  opened: boolean = false;
  position: string = 'end';

  constructor(private eventEmitterService: EventEmitterService) {}

  ngOnInit(): void {
    if (this.eventEmitterService.subsVar == undefined) {
      this.eventEmitterService.subsVar = this.eventEmitterService.invokeStartBillingFunction.subscribe(
        (name: string) => {
          this.showBillingMenu();
        }
      );
    }
    console.log('visible ==>', this.visible);
    if (this.visible == 1) {
      this.opened = true;
    }
  }

  showBillingMenu() {
    this.opened = !this.opened;
  }
}
