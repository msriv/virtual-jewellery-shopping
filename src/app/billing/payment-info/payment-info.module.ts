import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { StoreSelectComponent } from './store-select/store-select.component';

@NgModule({
  declarations: [PaymentMethodComponent, StoreSelectComponent],
  imports: [CommonModule],
  exports: [PaymentMethodComponent, StoreSelectComponent],
})
export class PaymentInfoModule {}
