import {ChangeDetectorRef, Component, ElementRef, Input, OnDestroy} from '@angular/core';
import {CdkStepHeader, CdkStepLabel, StepState} from '@angular/cdk/stepper';
import {FocusMonitor} from '@angular/cdk/a11y';

@Component({
    selector: 'yx-stepper-header',
    templateUrl: './stepper-header.component.html',
    styleUrls: ['./stepper-header.component.less']
})
export class StepperHeaderComponent extends CdkStepHeader implements OnDestroy {

    /** State of the given step. */
    @Input() state: StepState;

    /** Label of the given step. */
    @Input() label: CdkStepLabel | string;

    /** Index of the given step. */
    @Input() index: number;

    /** Whether the given step is selected. */
    @Input() selected: boolean;

    /** Whether the given step label is active. */
    @Input() active: boolean;

    /** Whether the given step is optional. */
    @Input() optional: boolean;

    constructor(
        private _focusMonitor: FocusMonitor,
        _elementRef: ElementRef<HTMLElement>,
        changeDetectorRef: ChangeDetectorRef) {
        super(_elementRef);
        _focusMonitor.monitor(_elementRef, true);
    }

    ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef);
    }

    /** Returns the host HTML element. */
    _getHostElement() {
        return this._elementRef.nativeElement;
    }

    /** Returns MatStepLabel if the label of given step is a template label. */
    _templateLabel(): CdkStepLabel | null {
        return this.label instanceof CdkStepLabel ? this.label : null;
    }

    /** Returns string label of given step if it is a text label. */
    _stringLabel(): string | null {
        return this.label instanceof CdkStepLabel ? null : this.label;
    }

}
