import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CdkBaseTableComponent} from './cdk-base-table.component';
import {CdkBaseTableRoutingModule} from './cdk-base-table-routing.module';
import {CdkTableModule} from '@angular/cdk/table';

@NgModule({
    imports: [
        CommonModule,
        CdkTableModule,
        CdkBaseTableRoutingModule
    ],
    declarations: [CdkBaseTableComponent]
})
export class CdkBaseTableModule {
}
