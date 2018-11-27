import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CdkCoercionComponent} from './cdk-coercion.component';
import {CdkCoercionRoutingModule} from './cdk-coercion-routing.module';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CdkCoercionRoutingModule
    ],
    declarations: [
        CdkCoercionComponent
    ]
})
export class CdkCoercionModule {
}
