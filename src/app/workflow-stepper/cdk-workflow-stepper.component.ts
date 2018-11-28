import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {CdkStep, CdkStepper} from '@angular/cdk/stepper';

@Component({
    selector: 'app-cdk-workflow-stepper',
    templateUrl: './cdk-workflow-stepper.component.html',
    styleUrls: ['./cdk-workflow-stepper.component.less']
})
export class CdkWorkflowStepperComponent {

    name = 'Angular 5';
    form1 = new FormControl();
    @ViewChild('stepper') stepper: CdkStepper;
    @ViewChild('step1') step1: CdkStep;
    @ViewChild('step2') step2: CdkStep;

}
