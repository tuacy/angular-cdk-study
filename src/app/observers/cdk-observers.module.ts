import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CdkObserversRoutingModule} from './cdk-observers-routing.module';
import {CdkObserversComponent} from './cdk-observers.component';
import {ObserversModule} from '@angular/cdk/observers';
import { ObserversChildComponent } from './child/observers-child.component';

@NgModule({
    imports: [
        CommonModule,
        ObserversModule,
        CdkObserversRoutingModule
    ],
    declarations: [CdkObserversComponent, ObserversChildComponent]
})
export class CdkObserversModule {
}
