import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CdkCoercionComponent} from './cdk-coercion.component';
import {CdkCoercionRoutingModule} from './cdk-coercion-routing.module';
import {BorderedBoxComponent} from './boder-box/bordered-box.component';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CdkCoercionRoutingModule
    ],
    declarations: [
        BorderedBoxComponent,
        CdkCoercionComponent
    ]
})
export class CdkCoercionModule {
}
