import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../../event-emitter.service';

@Component({
  selector: 'app-action-button-menu',
  templateUrl: './action-button-menu.component.html',
  styleUrls: ['./action-button-menu.component.scss'],
})
export class ActionButtonMenuComponent implements OnInit {
  constructor(private eventEmitterService: EventEmitterService) {}

  ngOnInit(): void {}

  startBillingFunction() {
    this.eventEmitterService.onStartBillingClick();
  }
}
