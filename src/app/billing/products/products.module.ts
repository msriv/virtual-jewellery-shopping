import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { SharedModule } from '../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [ProductCartComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    ReactiveFormsModule,
    ProductRoutingModule,
  ],
  exports: [ProductCartComponent],
})
export class ProductsModule {}
