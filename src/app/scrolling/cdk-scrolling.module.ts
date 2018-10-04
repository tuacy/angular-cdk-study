import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CdkScrollingRoutingModule} from './cdk-scrolling-routing.module';
import {CdkScrollingComponent} from './cdk-scrolling.component';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CdkScrollingRoutingModule
    ],
    declarations: [
        CdkScrollingComponent
    ]
})
export class CdkScrollingModule {
}
