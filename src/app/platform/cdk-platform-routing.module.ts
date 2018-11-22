import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CdkOverlayComponent} from '../overlay/cdk-overlay.component';
import {CdkPlatformComponent} from './cdk-platform.component';

const routes: Routes = [
    {
        path: '',
        component: CdkPlatformComponent
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
export class CdkPlatformRoutingModule { }
