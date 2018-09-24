import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CdkCoercionComponent} from './cdk-coercion.component';

const routes: Routes = [
    {
        path: '',
        component: CdkCoercionComponent
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
export class CdkCoercionRoutingModule { }
