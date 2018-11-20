import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CdkLayoutModule} from './layout/cdk-layout.module';
import {CdkCoercionModule} from './coercion/cdk-coercion.module';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CdkKeyCodesModule} from './keycodes/cdk-key-codes.module';
import {CdkOverlayModule} from "./overlay/cdk-overlay.module";
import {CdkScrollingModule} from "./scrolling/cdk-scrolling.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule,
        CdkCoercionModule,
        CdkLayoutModule,
        CdkKeyCodesModule,
        CdkScrollingModule,
        CdkOverlayModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
