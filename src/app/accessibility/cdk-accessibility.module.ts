import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CdkAccessibilityRoutingModule} from './cdk-accessibility-routing.module';
import {CdkAccessibilityComponent} from './cdk-accessibility.component';
import {ItemOptionComponent} from './item-option/item-option.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CdkAccessibilityRoutingModule
    ],
    declarations: [
        CdkAccessibilityComponent,
        ItemOptionComponent
    ]
})
export class CdkAccessibilityModule {
}
