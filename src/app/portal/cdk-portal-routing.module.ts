import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CdkPortalComponent} from './cdk-portal.component';


const routes: Routes = [
    {
        path: '',
        component: CdkPortalComponent
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
export class CdkPortalRoutingModule {
}
