import { NgModule } from '@angular/core';

import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { StepIndicatorComponent } from './step-indicator/step-indicator.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [OrderSummaryComponent, StepIndicatorComponent],
  imports: [NgbModule],
  exports: [StepIndicatorComponent, OrderSummaryComponent],
})
export class SharedModule {}
