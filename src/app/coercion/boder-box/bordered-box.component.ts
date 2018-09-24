import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {coerceCssPixelValue} from '@angular/cdk/coercion';

@Component({
    selector: 'app-bordered-box',
    template: `
        <ng-content></ng-content>`,
    styles: [`
        :host {
            border: 1px solid black;
        }
    `]
})
export class BorderedBoxComponent {

    private _borderWidth: string;

    @Input()
    @HostBinding('style.border-width')
    set borderWidth(value: string) {
        this._borderWidth = coerceCssPixelValue(value);
    }

    get borderWidth() {
        return this._borderWidth;
    }

}
