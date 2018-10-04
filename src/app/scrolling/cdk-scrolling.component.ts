import {Component, OnInit} from '@angular/core';
import {CdkScrollable, ScrollDispatcher} from '@angular/cdk/overlay';

@Component({
    selector: 'app-cdk-scrolling',
    templateUrl: './cdk-scrolling.component.html',
    styleUrls: ['./cdk-scrolling.component.less']
})
export class CdkScrollingComponent implements OnInit {
    constructor(private scrollDispatcher: ScrollDispatcher) {
    }

    ngOnInit() {
        this.scrollDispatcher.scrolled().subscribe((scrollable: CdkScrollable) => {
            console.log('发生scroll了，來源于：');
            console.log(scrollable.getElementRef().nativeElement);
        });
    }
}
