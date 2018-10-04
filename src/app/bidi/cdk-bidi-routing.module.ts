import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CdkBidiComponent} from './cdk-bidi.component';


const routes: Routes = [
    {
        path: '',
        component: CdkBidiComponent
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
export class CdkBidiRoutingModule {
}
