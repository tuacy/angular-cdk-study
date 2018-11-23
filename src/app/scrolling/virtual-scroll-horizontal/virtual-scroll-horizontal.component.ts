import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-virtual-scroll-horizontal',
    templateUrl: './virtual-scroll-horizontal.component.html',
    styleUrls: ['./virtual-scroll-horizontal.component.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VirtualScrollHorizontalComponent {

    items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

}
