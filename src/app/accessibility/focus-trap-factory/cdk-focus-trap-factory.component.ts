import {AfterViewInit, Component, ElementRef} from '@angular/core';
import {FocusTrap, FocusTrapFactory} from "@angular/cdk/a11y";

@Component({
    selector: 'app-cdk-focus-trap-factory',
    templateUrl: './cdk-focus-trap-factory.component.html',
    styleUrls: ['./cdk-focus-trap-factory.component.less']
})
export class CdkFocusTrapFactoryComponent implements AfterViewInit {

    private _focusTrap: FocusTrap;

    constructor(private _elementRef: ElementRef,
                private _focusTrapFactory: FocusTrapFactory) {
    }

    ngAfterViewInit() {
        this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
    }

}
