import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CdkLayoutComponent} from './cdk-layout.component';


const routes: Routes = [
    {
        path: '',
        component: CdkLayoutComponent
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
export class CdkLayoutRoutingModule {
}
