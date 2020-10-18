import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { StoreSelectComponent } from './payment-method/store-select/store-select.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [PaymentMethodComponent, StoreSelectComponent],
  imports: [CommonModule, SharedModule],
  exports: [PaymentMethodComponent, StoreSelectComponent],
})
export class PaymentInfoModule {}
