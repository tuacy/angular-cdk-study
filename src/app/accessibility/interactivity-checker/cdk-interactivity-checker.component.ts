import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {InteractivityChecker} from "@angular/cdk/a11y";

@Component({
    selector: 'app-cdk-interactivity-checker',
    templateUrl: './cdk-interactivity-checker.component.html',
    styleUrls: ['./cdk-interactivity-checker.component.less']
})
export class CdkInteractivityCheckerComponent implements OnInit {

    @ViewChild('interactivityCheckerButton') button: ElementRef;
    disable: boolean;
    visible: boolean;
    tabable: boolean;
    focusable: boolean;

    constructor(private _interactivityChecker: InteractivityChecker) {
    }

    ngOnInit() {
        this.disable = this._interactivityChecker.isDisabled(this.button.nativeElement);
        this.visible = this._interactivityChecker.isVisible(this.button.nativeElement);
        this.tabable = this._interactivityChecker.isTabbable(this.button.nativeElement);
        this.focusable = this._interactivityChecker.isFocusable(this.button.nativeElement);
    }

}
