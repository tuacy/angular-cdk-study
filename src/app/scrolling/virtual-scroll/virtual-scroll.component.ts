import {Component, OnInit} from '@angular/core';
import {ViewportRuler} from '@angular/cdk/overlay';

@Component({
    selector: 'app-virtual-scroll',
    templateUrl: './virtual-scroll.component.html',
    styleUrls: ['./virtual-scroll.component.less']
})
export class VirtualScrollComponent implements OnInit {

    items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);


    constructor(private viewPortRuler: ViewportRuler) {
    }

    ngOnInit(): void {

    }


}
