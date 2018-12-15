import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {CdkVirtualScrollViewport} from "@angular/cdk/scrolling";

@Component({
    selector: 'app-virtual-scroll',
    templateUrl: './virtual-scroll.component.html',
    styleUrls: ['./virtual-scroll.component.less']
})
export class VirtualScrollComponent implements AfterViewInit{

    @ViewChild('scrollComponent')
    private _scrollViewport: CdkVirtualScrollViewport;

    items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

    ngAfterViewInit(): void {
    }

    onButtonClick() {
        this._scrollViewport.scrollToIndex(10);
    }
}
