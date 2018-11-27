import {Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AutofillMonitor, CdkTextareaAutosize} from "@angular/cdk/text-field";
import {take} from "rxjs/operators";

@Component({
    selector: 'app-cdk-text-field',
    templateUrl: './cdk-text-field.component.html',
    styleUrls: ['./cdk-text-field.component.less']
})
export class CdkTextFieldComponent implements OnDestroy, OnInit {
    @ViewChild('autosize') autosize: CdkTextareaAutosize;
    @ViewChild('first', {read: ElementRef}) firstName: ElementRef<HTMLElement>;
    @ViewChild('last', {read: ElementRef}) lastName: ElementRef<HTMLElement>;
    firstNameAutofilled: boolean;
    lastNameAutofilled: boolean;


    constructor(private ngZone: NgZone, private autofill: AutofillMonitor) {
    }

    ngOnInit() {
        this.autofill.monitor(this.firstName)
            .subscribe(e => this.firstNameAutofilled = e.isAutofilled);
        this.autofill.monitor(this.lastName)
            .subscribe(e => this.lastNameAutofilled = e.isAutofilled);
    }

    ngOnDestroy() {
        this.autofill.stopMonitoring(this.firstName);
        this.autofill.stopMonitoring(this.lastName);
    }

    /**
     * 外部调用触发调整大小的逻辑，比如当fontSize改变之后，调用该函数
     */
    triggerResize() {
        // 重新适应内容，比如fontSize改变了，可以调用该方法重新适应内容
        this.ngZone.onStable.pipe(take(1))
            .subscribe(() => this.autosize.resizeToFitContent(true));
    }
}
