import { NgModule } from '@angular/core';

import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { StepIndicatorComponent } from './step-indicator/step-indicator.component';

@NgModule({
  declarations: [OrderSummaryComponent, StepIndicatorComponent],
  exports: [StepIndicatorComponent, OrderSummaryComponent],
})
export class SharedModule {}
