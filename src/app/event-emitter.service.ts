import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root',
})
export class EventEmitterService {
  invokeStartBillingFunction = new EventEmitter();
  subsVar: Subscription;

  constructor() {}

  onStartBillingClick() {
    this.invokeStartBillingFunction.emit();
  }
}
