import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserInfoFormComponent } from './user-info-form/user-info-form.component';

const routes: Routes = [
  { path: 'user-info', component: UserInfoFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerDetailsRoutingModule {}
