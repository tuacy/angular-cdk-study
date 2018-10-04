import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CdkAccessibilityComponent} from './cdk-accessibility.component';


const routes: Routes = [
    {
        path: '',
        component: CdkAccessibilityComponent
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
export class CdkAccessibilityRoutingModule { }
