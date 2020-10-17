import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoCallModule } from './video-call/video-call.module';
import { BillingModule } from './billing/billing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BillingModule, VideoCallModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
