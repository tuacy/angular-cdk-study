import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CdkAccessibilityRoutingModule} from './cdk-accessibility-routing.module';
import {CdkAccessibilityComponent} from './cdk-accessibility.component';
import {ItemActiveOptionComponent} from './active-descendant/active-item-option/item-active-option.component';
import {FilterPipe} from "./filter.pipe";
import {A11yModule} from "@angular/cdk/a11y";
import {CdkActiveDescendantComponent} from './active-descendant/cdk-active-descendant.component';
import {CdkFocusComponent} from './focus/cdk-focus.component';
import {ItemFocusOptionComponent} from './focus/focus-item-option/item-focus-option.component';
import { CdkFocusTrapFactoryComponent } from './focus-trap-factory/cdk-focus-trap-factory.component';
import { CdkFocusMonitorComponent } from './focus-monitor/cdk-focus-monitor.component';
import { CdkInteractivityCheckerComponent } from './interactivity-checker/cdk-interactivity-checker.component';
import { CdkLiveAnnouncerComponent } from './live-announcer/cdk-live-announcer.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        A11yModule,
        CdkAccessibilityRoutingModule
    ],
    declarations: [
        CdkAccessibilityComponent,
        ItemActiveOptionComponent,
        FilterPipe,
        CdkActiveDescendantComponent,
        CdkFocusComponent,
        ItemFocusOptionComponent,
        CdkFocusTrapFactoryComponent,
        CdkFocusMonitorComponent,
        CdkInteractivityCheckerComponent,
        CdkLiveAnnouncerComponent
    ]
})
export class CdkAccessibilityModule {
}
