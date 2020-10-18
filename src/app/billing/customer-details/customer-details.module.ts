import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoFormComponent } from './user-info-form/user-info-form.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [UserInfoFormComponent],
  imports: [CommonModule, SharedModule],
  exports: [UserInfoFormComponent],
})
export class CustomerDetailsModule {}
