import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CdkBidiRoutingModule} from './cdk-bidi-routing.module';
import {CdkBidiComponent} from './cdk-bidi.component';
import {BidiModule} from "@angular/cdk/bidi";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        BidiModule,
        CdkBidiRoutingModule
    ],
    declarations: [
        CdkBidiComponent
    ]
})
export class CdkBidiModule {
}
