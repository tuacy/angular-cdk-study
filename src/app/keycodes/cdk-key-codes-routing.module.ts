import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CdkKeyCodesComponent} from './cdk-key-codes.component';

const routes: Routes = [
    {
        path: '',
        component: CdkKeyCodesComponent
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
export class CdkKeyCodesRoutingModule { }
