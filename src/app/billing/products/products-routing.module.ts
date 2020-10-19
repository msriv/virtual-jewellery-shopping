import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCartComponent } from './product-cart/product-cart.component';

const routes: Routes = [
  { path: 'product-cart', component: ProductCartComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
