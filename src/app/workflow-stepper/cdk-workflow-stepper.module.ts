import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CdkWorkflowStepperComponent} from './cdk-workflow-stepper.component';
import {CdkWorkflowStepperRoutingModule} from './cdk-workflow-stepper-routing.module';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkCustomerStepperComponent} from './custom-stepper/cdk-customer-stepper.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CdkStepperModule,
        CdkWorkflowStepperRoutingModule
    ],
    declarations: [CdkWorkflowStepperComponent, CdkCustomerStepperComponent]
})
export class CdkWorkflowStepperModule {
}
