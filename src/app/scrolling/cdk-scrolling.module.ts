import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CdkScrollingRoutingModule} from './cdk-scrolling-routing.module';
import {CdkScrollingComponent} from './cdk-scrolling.component';
import {RouterModule} from '@angular/router';
import {VirtualScrollComponent} from './virtual-scroll/virtual-scroll.component';
import {ScrollingModule} from "@angular/cdk/scrolling";
import {VirtualScrollDataSourceComponent} from './virtual-scroll-data-source/virtual-scroll-data-source.component';
import {VirtualScrollHorizontalComponent} from './virtual-scroll-horizontal/virtual-scroll-horizontal.component';
import {VirtualScrollStrategiesComponent} from './virtual-scroll-strategies/virtual-scroll-strategies.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ScrollingModule,
        CdkScrollingRoutingModule
    ],
    declarations: [
        CdkScrollingComponent,
        VirtualScrollComponent,
        VirtualScrollDataSourceComponent,
        VirtualScrollHorizontalComponent,
        VirtualScrollStrategiesComponent
    ]
})
export class CdkScrollingModule {
}
