import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoCallModule } from './video-call/video-call.module';
import { BillingModule } from './billing/billing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResponsiveModule } from 'ngx-responsive';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BillingModule,
    VideoCallModule,
    NgbModule,
    ResponsiveModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
