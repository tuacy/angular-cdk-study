import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LayoutModule} from '@angular/cdk/layout';
import {CdkLayoutModule} from './layout/cdk-layout.module';
import {CdkCoercionModule} from './coercion/cdk-coercion.module';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {KeyCodesModule} from './keycodes/key-codes.module';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule,
        LayoutModule,
        CdkCoercionModule,
        CdkLayoutModule,
        KeyCodesModule,
        ScrollDispatchModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
