import {ChangeDetectionStrategy, Component} from '@angular/core';
import {VIRTUAL_SCROLL_STRATEGY} from "@angular/cdk/scrolling";
import {CustomVirtualScrollStrategies} from "./custom-virtual-scroll-strategies";

@Component({
    selector: 'app-virtual-scroll-strategies',
    templateUrl: './virtual-scroll-strategies.component.html',
    styleUrls: ['./virtual-scroll-strategies.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{provide: VIRTUAL_SCROLL_STRATEGY, useClass: CustomVirtualScrollStrategies}]
})
export class VirtualScrollStrategiesComponent {

    items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

}
