import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoFormComponent } from './user-info-form/user-info-form.component';
import { SharedModule } from '../../shared/shared.module';
import { CustomerDetailsRoutingModule } from './Customer-details-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserInfoFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    CustomerDetailsRoutingModule,
  ],
  exports: [UserInfoFormComponent],
})
export class CustomerDetailsModule {}
