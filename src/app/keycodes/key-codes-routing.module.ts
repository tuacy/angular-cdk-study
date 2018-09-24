import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {KeyCodesComponent} from './key-codes.component';

const routes: Routes = [
    {
        path: '',
        component: KeyCodesComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class KeyCodesRoutingModule { }
