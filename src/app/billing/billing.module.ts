import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingComponent } from './billing/billing.component';
import { ProductsModule } from './products/products.module';
import { CustomerDetailsModule } from './customer-details/customer-details.module';
import { PaymentInfoModule } from './payment-info/payment-info.module';
import { SharedModule } from '../shared/shared.module';
import { ResponsiveModule } from 'ngx-responsive';
import { SidebarModule } from 'ng-sidebar';
@NgModule({
  declarations: [BillingComponent],
  imports: [
    CommonModule,
    ProductsModule,
    CustomerDetailsModule,
    PaymentInfoModule,
    ResponsiveModule.forRoot(),
    SidebarModule.forRoot(),
    SharedModule,
  ],
  exports: [
    BillingComponent,
    ProductsModule,
    CustomerDetailsModule,
    PaymentInfoModule,
  ],
})
export class BillingModule {}
