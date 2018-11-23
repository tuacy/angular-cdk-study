import {FixedSizeVirtualScrollStrategy} from "@angular/cdk/scrolling";

export class CustomVirtualScrollStrategies extends FixedSizeVirtualScrollStrategy {
    constructor() {
        super(50, 250, 500);
    }
}

