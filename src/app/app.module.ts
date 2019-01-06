import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CdkLayoutModule} from './layout/cdk-layout.module';
import {CdkCoercionModule} from './coercion/cdk-coercion.module';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CdkKeyCodesModule} from './keycodes/cdk-key-codes.module';
import {CdkOverlayModule} from './overlay/cdk-overlay.module';
import {CdkScrollingModule} from './scrolling/cdk-scrolling.module';
import {TipDirective} from './tip/tip.directive';
import {TipComponent} from './tip/tip.component';
import {CdkPlatformModule} from './platform/cdk-platform.module';
import {CdkObserversModule} from './observers/cdk-observers.module';
import {CdkDragDropModule} from './drag-drop/cdk-drag-drop.module';
import {CdkTextFieldModule} from "./text-field/cdk-text-field.module";
import {CdkWorkflowStepperModule} from "./workflow-stepper/cdk-workflow-stepper.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FullscreenOverlayContainer, OverlayContainer} from '@angular/cdk/overlay';
import {CdkBaseTableModule} from './table/cdk-base-table.module';

@NgModule({
    declarations: [
        AppComponent,
        TipDirective,
        TipComponent
    ],
    imports: [
        RouterModule,
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        CdkCoercionModule,
        CdkLayoutModule,
        CdkKeyCodesModule,
        CdkScrollingModule,
        CdkOverlayModule,
        CdkPlatformModule,
        CdkObserversModule,
        CdkDragDropModule,
        CdkTextFieldModule,
        CdkWorkflowStepperModule,
        CdkBaseTableModule,
        AppRoutingModule
    ],
    providers: [
        {provide: OverlayContainer, useClass: FullscreenOverlayContainer},

],
    bootstrap: [AppComponent]
})
export class AppModule {
}
