import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoFormComponent } from './user-info-form/user-info-form.component';

@NgModule({
  declarations: [UserInfoFormComponent],
  imports: [CommonModule],
  exports: [UserInfoFormComponent],
})
export class CustomerDetailsModule {}
