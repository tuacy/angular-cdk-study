import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CdkKeyCodesComponent} from './cdk-key-codes.component';
import {RouterModule} from '@angular/router';
import {CdkKeyCodesRoutingModule} from './cdk-key-codes-routing.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CdkKeyCodesRoutingModule
    ],
    declarations: [
        CdkKeyCodesComponent
    ]
})
export class CdkKeyCodesModule {
}
