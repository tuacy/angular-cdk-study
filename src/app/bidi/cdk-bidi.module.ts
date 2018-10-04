import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CdkBidiRoutingModule} from './cdk-bidi-routing.module';
import {CdkBidiComponent} from './cdk-bidi.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CdkBidiRoutingModule
    ],
    declarations: [
        CdkBidiComponent
    ]
})
export class CdkBidiModule {
}
