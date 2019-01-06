import {Component, HostBinding, Input} from '@angular/core';
import {Highlightable} from "@angular/cdk/a11y";

@Component({
    selector: 'app-item-active-option',
    template: `
        <div [class.disabled]="disabled">
            <ng-content></ng-content>
        </div>
    `,
    styles: [`
        .active {
            background-color: lightblue;
            color: #fff;
        }

        .disabled {
            opacity: 0.3;
        }
    `]
})
export class ItemActiveOptionComponent implements Highlightable {
    @Input() item;
    @Input() disabled = false;
    private _isActive = false;

    @HostBinding('class.active') get isActive() {
        return this._isActive;
    }

    setActiveStyles() {
        this._isActive = true;
    }

    setInactiveStyles() {
        this._isActive = false;
    }

    getLabel() {
        return this.item.name;
    }
}
