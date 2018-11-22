import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {ContentObserver} from '@angular/cdk/observers';

@Component({
    selector: 'app-cdk-observers',
    templateUrl: './cdk-observers.component.html',
    styleUrls: ['./cdk-observers.component.less']
})
export class CdkObserversComponent implements AfterViewInit {

    @ViewChild('observerSource')
    observerSource: ElementRef;

    content = 1;

    constructor(private observer: ContentObserver) {
        setInterval(() => {
            this.content++;
        }, 3000);
    }

    ngAfterViewInit(): void {
        // ContentObserver service监听变化
        this.observer.observe(this.observerSource.nativeElement).subscribe((event: MutationRecord[]) => console.log(event));
    }
}
