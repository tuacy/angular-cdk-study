import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {FocusMonitor} from "@angular/cdk/a11y";

@Component({
    selector: 'app-cdk-focus-monitor',
    templateUrl: './cdk-focus-monitor.component.html',
    styleUrls: ['./cdk-focus-monitor.component.less']
})
export class CdkFocusMonitorComponent implements AfterViewInit, OnDestroy {

    constructor(private _elementRef: ElementRef,
                private _focusMonitor: FocusMonitor) {
    }

    ngAfterViewInit() {
        this._focusMonitor.monitor(this._elementRef.nativeElement, true).subscribe(mode => {
            console.log('元素获取到焦点 focused 来源 ' + mode);
        });
    }

    ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef.nativeElement);
    }

}
