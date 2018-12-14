import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverlayModule} from "@angular/cdk/overlay";
import {CdkOverlayComponent} from './cdk-overlay.component';
import {CdkOverlayRoutingModule} from "./cdk-overlay-routing.module";
import {OverlayPanelComponent} from './panel/overlay-panel.component';
import {PortalModule} from "@angular/cdk/portal";

@NgModule({
    imports: [
        CommonModule,
        PortalModule,
        OverlayModule,
        CdkOverlayRoutingModule
    ],
    declarations: [
        CdkOverlayComponent,
        OverlayPanelComponent
    ],
    entryComponents: [
        OverlayPanelComponent
    ],
    providers: [
    ],
})
export class CdkOverlayModule {
}
