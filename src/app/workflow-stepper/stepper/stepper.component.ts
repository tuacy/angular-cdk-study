import {
    AfterContentInit,
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    EventEmitter,
    Output,
    QueryList,
    ViewEncapsulation
} from '@angular/core';
import {AnimationEvent} from '@angular/animations';
import {CdkStep, CdkStepper, StepContentPositionState} from '@angular/cdk/stepper';
import {Subject} from 'rxjs';
import {distinctUntilChanged, takeUntil} from 'rxjs/operators';
import {yxStepperAnimations} from './stepper-animations';

@Component({
    selector: 'yx-stepper',
    templateUrl: './stepper.component.html',
    styleUrls: ['./stepper.component.less'],
    providers: [{provide: CdkStepper, useExisting: StepperComponent}],
    animations: [yxStepperAnimations.horizontalStepTransition],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperComponent extends CdkStepper implements AfterContentInit {

    /** Steps that the stepper holds. */
    @ContentChildren(CdkStep) _steps: QueryList<CdkStep>;

    /** Event emitted when the current step is done transitioning in. */
    @Output() readonly animationDone: EventEmitter<void> = new EventEmitter<void>();

    _animationDone = new Subject<AnimationEvent>();

    ngAfterContentInit() {

        // Mark the component for change detection whenever the content children query changes
        this._steps.changes.pipe(takeUntil(this._destroyed)).subscribe(() => this._stateChanged());

        this._animationDone.pipe(
            // This needs a `distinctUntilChanged` in order to avoid emitting the same event twice due
            // to a bug in animations where the `.done` callback gets invoked twice on some browsers.
            // See https://github.com/angular/angular/issues/24084
            distinctUntilChanged((x, y) => x.fromState === y.fromState && x.toState === y.toState),
            takeUntil(this._destroyed)
        ).subscribe(event => {
            if ((event.toState as StepContentPositionState) === 'current') {
                this.animationDone.emit();
            }
        });
    }
}
