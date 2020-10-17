import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepIndicatorComponent } from './step-indicator/step-indicator.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { BillingComponent } from './billing/billing.component';
import { ProductsModule } from './products/products.module';
import { CustomerDetailsModule } from './customer-details/customer-details.module';
import { PaymentInfoModule } from './payment-info/payment-info.module';

@NgModule({
  declarations: [
    StepIndicatorComponent,
    OrderSummaryComponent,
    BillingComponent,
  ],
  imports: [
    CommonModule,
    ProductsModule,
    CustomerDetailsModule,
    PaymentInfoModule,
  ],
  exports: [
    BillingComponent,
    ProductsModule,
    CustomerDetailsModule,
    PaymentInfoModule,
    OrderSummaryComponent,
  ],
})
export class BillingModule {}
