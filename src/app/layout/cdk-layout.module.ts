import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CdkLayoutRoutingModule} from './cdk-layout-routing.module';
import {CdkLayoutComponent} from './cdk-layout.component';
import {RouterModule} from '@angular/router';
import {LayoutModule} from "@angular/cdk/layout";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        LayoutModule,
        CdkLayoutRoutingModule
    ],
    declarations: [
        CdkLayoutComponent
    ]
})
export class CdkLayoutModule {
}
