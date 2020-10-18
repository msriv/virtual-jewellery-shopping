import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoFeedComponent } from './video-feed/video-feed.component';
import { ParticipantsComponent } from './participants/participants.component';
import { CallDurationComponent } from './call-duration/call-duration.component';
import { ActionButtonMenuComponent } from './action-button-menu/action-button-menu.component';
import { VideoCallComponent } from './video-call/video-call.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventEmitterService } from '../event-emitter.service';

@NgModule({
  declarations: [
    VideoFeedComponent,
    ParticipantsComponent,
    CallDurationComponent,
    ActionButtonMenuComponent,
    VideoCallComponent,
  ],
  imports: [CommonModule, NgbModule],
  exports: [VideoCallComponent],
  providers: [EventEmitterService],
})
export class VideoCallModule {}
