import {Component} from '@angular/core';
import {LiveAnnouncer} from "@angular/cdk/a11y";

@Component({
    selector: 'app-cdk-live-announcer',
    templateUrl: './cdk-live-announcer.component.html',
    styleUrls: ['./cdk-live-announcer.component.less']
})
export class CdkLiveAnnouncerComponent {

    index = 1;

    constructor(private liveAnnouncer: LiveAnnouncer) {
        liveAnnouncer.announce("Hey Google");
        setTimeout(() => {
            this.timerTask();
        }, 3000);
    }

    timerTask() {
        this.index = this.index + 1;
        this.liveAnnouncer.announce("Hey Google " + this.index.toString(), "assertive");
    }

}
