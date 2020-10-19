import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompletionComponent } from './completion/completion.component';

const routes: Routes = [{ path: 'completion', component: CompletionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillingRoutingModule {}
