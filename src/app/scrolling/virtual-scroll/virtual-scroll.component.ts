import {Component} from '@angular/core';

@Component({
    selector: 'app-virtual-scroll',
    templateUrl: './virtual-scroll.component.html',
    styleUrls: ['./virtual-scroll.component.less']
})
export class VirtualScrollComponent {

    items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

}
