import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CdkWorkflowStepperComponent} from "./cdk-workflow-stepper.component";

const routes: Routes = [
    {
        path: '',
        component: CdkWorkflowStepperComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class CdkWorkflowStepperRoutingModule { }
