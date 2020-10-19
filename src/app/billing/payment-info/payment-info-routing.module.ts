import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentMethodComponent } from './payment-method/payment-method.component';

const routes: Routes = [
  { path: 'payment-method', component: PaymentMethodComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentInfoRoutingModule {}
