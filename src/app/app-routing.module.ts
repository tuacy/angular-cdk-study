import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CdkCoercionModule} from './coercion/cdk-coercion.module';
import {RouterModule, Routes} from '@angular/router';
import {CdkLayoutModule} from './layout/cdk-layout.module';
import {KeyCodesModule} from './keycodes/key-codes.module';
import {CdkAccessibilityModule} from './accessibility/cdk-accessibility.module';

const appRoutes: Routes = [
    {
        path: 'coercion',
        loadChildren: () => CdkCoercionModule
    }, {
        path: 'layout',
        loadChildren: () => CdkLayoutModule
    }, {
        path: 'keycodes',
        loadChildren: () => KeyCodesModule
    }, {
        path: 'accessibility',
        loadChildren: () => CdkAccessibilityModule
    }, {
        path: '',
        redirectTo: '/coercion',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        CommonModule
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AppRoutingModule {
}
