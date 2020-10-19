import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { StoreSelectComponent } from './payment-method/store-select/store-select.component';
import { SharedModule } from '../../shared/shared.module';
import { PaymentInfoRoutingModule } from './payment-info-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [PaymentMethodComponent, StoreSelectComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    PaymentInfoRoutingModule,
    NgbModule,
  ],
  exports: [PaymentMethodComponent, StoreSelectComponent],
})
export class PaymentInfoModule {}
