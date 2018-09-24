import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CdkLayoutRoutingModule} from './cdk-layout-routing.module';
import {CdkLayoutComponent} from './cdk-layout.component';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CdkLayoutRoutingModule
    ],
    declarations: [
        CdkLayoutComponent
    ]
})
export class CdkLayoutModule {
}
