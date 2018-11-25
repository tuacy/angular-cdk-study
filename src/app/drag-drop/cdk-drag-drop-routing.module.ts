import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CdkDragDropComponent} from './cdk-drag-drop.component';

const routes: Routes = [
    {
        path: '',
        component: CdkDragDropComponent
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
export class CdkDragDropRoutingModule { }
