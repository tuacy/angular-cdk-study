import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CdkOverlayComponent} from "./cdk-overlay.component";

const routes: Routes = [
    {
        path: '',
        component: CdkOverlayComponent
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
export class CdkOverlayRoutingModule { }
