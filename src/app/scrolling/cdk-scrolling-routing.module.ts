import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CdkScrollingComponent} from './cdk-scrolling.component';


const routes: Routes = [
    {
        path: '',
        component: CdkScrollingComponent
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
export class CdkScrollingRoutingModule {
}
