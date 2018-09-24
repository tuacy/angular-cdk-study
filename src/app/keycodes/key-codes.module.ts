import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KeyCodesComponent} from './key-codes.component';
import {RouterModule} from '@angular/router';
import {KeyCodesRoutingModule} from './key-codes-routing.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        KeyCodesRoutingModule
    ],
    declarations: [
        KeyCodesComponent
    ]
})
export class KeyCodesModule {
}
