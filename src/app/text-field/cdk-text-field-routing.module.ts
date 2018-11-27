import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CdkTextFieldComponent} from "./cdk-text-field.component";

const routes: Routes = [
    {
        path: '',
        component: CdkTextFieldComponent
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
export class CdkTextFieldRoutingModule { }
