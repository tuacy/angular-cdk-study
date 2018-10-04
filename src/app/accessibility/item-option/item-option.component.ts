import {Component} from '@angular/core';
import {ListKeyManagerOption} from '@angular/cdk/a11y';

@Component({
    selector: 'app-item-option',
    templateUrl: './item-option.component.html',
    styleUrls: ['./item-option.component.less']
})
export class ItemOptionComponent implements ListKeyManagerOption {
    disabled: boolean;

    constructor() {
        this.disabled = false;
    }

    getLabel(): string {
        return 'test';
    }
}
