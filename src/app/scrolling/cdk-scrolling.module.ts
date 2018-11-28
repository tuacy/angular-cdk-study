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
import {DragDropModule} from '@angular/cdk/drag-drop';
import { DragScrollingComponent } from './drag-scrolling/drag-scrolling.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        DragDropModule,
        ScrollingModule,
        CdkScrollingRoutingModule
    ],
    declarations: [
        CdkScrollingComponent,
        VirtualScrollComponent,
        VirtualScrollDataSourceComponent,
        VirtualScrollHorizontalComponent,
        VirtualScrollStrategiesComponent,
        DragScrollingComponent
    ]
})
export class CdkScrollingModule {
}
