import {Component, ElementRef, HostBinding, Input} from '@angular/core';
import {FocusableOption, FocusOrigin} from "@angular/cdk/a11y";

@Component({
    selector: 'app-item-focus-option',
    template: `
        <ng-content></ng-content>
    `,
    styles: [
            `:host:focus {
            background: lightblue;
            color: #fff;
        }`
    ]
})

export class ItemFocusOptionComponent implements FocusableOption {
    @Input() item;

    /**
     * 屏蔽掉默认的键盘事件，js里面自己控制键盘事件
     */
    @HostBinding('tabindex') tabindex = '-1';

    constructor(private host: ElementRef) {
    }

    getLabel() {
        return this.item.name;
    }

    focus(origin?: FocusOrigin): void {
        this.host.nativeElement.focus();
    }
}
