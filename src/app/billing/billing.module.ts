import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingComponent } from './billing/billing.component';
import { ProductsModule } from './products/products.module';
import { CustomerDetailsModule } from './customer-details/customer-details.module';
import { PaymentInfoModule } from './payment-info/payment-info.module';
import { SharedModule } from '../shared/shared.module';
import { ResponsiveModule } from 'ngx-responsive';
import { SidebarModule } from 'ng-sidebar';
import { EventEmitterService } from '../event-emitter.service';
import { BillingRoutingModule } from './billing-routing.module';
import { CompletionComponent } from './completion/completion.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [BillingComponent, CompletionComponent],
  imports: [
    CommonModule,
    ProductsModule,
    CustomerDetailsModule,
    PaymentInfoModule,
    ResponsiveModule.forRoot(),
    SidebarModule.forRoot(),
    SharedModule,
    BillingRoutingModule,
    NgbModule,
  ],
  exports: [
    BillingComponent,
    CompletionComponent,
    ProductsModule,
    CustomerDetailsModule,
    PaymentInfoModule,
  ],
  providers: [EventEmitterService],
})
export class BillingModule {}
