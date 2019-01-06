import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CdkWorkflowStepperComponent} from './cdk-workflow-stepper.component';
import {CdkWorkflowStepperRoutingModule} from './cdk-workflow-stepper-routing.module';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {StepperComponent} from './stepper/stepper.component';
import {FormsModule} from '@angular/forms';
import {StepperHeaderComponent} from './stepper/stepper-header.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CdkStepperModule,
        CdkWorkflowStepperRoutingModule
    ],
    declarations: [CdkWorkflowStepperComponent, StepperComponent, StepperHeaderComponent]
})
export class CdkWorkflowStepperModule {
}
