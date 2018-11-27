import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CdkTextFieldComponent} from './cdk-text-field.component';
import {CdkTextFieldRoutingModule} from "./cdk-text-field-routing.module";
import {RouterModule} from "@angular/router";
import {TextFieldModule} from "@angular/cdk/text-field";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TextFieldModule,
        CdkTextFieldRoutingModule
    ],
    declarations: [CdkTextFieldComponent]
})
export class CdkTextFieldModule {
}
