import {Component, HostBinding, Input} from '@angular/core';
import {Highlightable} from "@angular/cdk/a11y";

@Component({
    selector: 'app-item-active-option',
    templateUrl: './item-active-option.component.html',
    styleUrls: ['./item-active-option.component.less']
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
