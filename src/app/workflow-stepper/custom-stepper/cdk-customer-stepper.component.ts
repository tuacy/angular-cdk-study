import {Component} from '@angular/core';
import {CdkStepper} from '@angular/cdk/stepper';

@Component({
    selector: 'app-cdk-customer-stepper',
    templateUrl: './cdk-customer-stepper.component.html',
    styleUrls: ['./cdk-customer-stepper.component.less'],
    providers: [{provide: CdkStepper, useExisting: CdkCustomerStepperComponent}],
})
export class CdkCustomerStepperComponent extends CdkStepper {

}
