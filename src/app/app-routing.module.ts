import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CdkCoercionModule} from './coercion/cdk-coercion.module';
import {RouterModule, Routes} from '@angular/router';
import {CdkLayoutModule} from './layout/cdk-layout.module';
import {CdkKeyCodesModule} from './keycodes/cdk-key-codes.module';
import {CdkAccessibilityModule} from './accessibility/cdk-accessibility.module';
import {CdkBidiModule} from './bidi/cdk-bidi.module';
import {CdkScrollingModule} from './scrolling/cdk-scrolling.module';
import {CdkLPortalModule} from './portal/cdk-portal.module';
import {CdkOverlayModule} from './overlay/cdk-overlay.module';
import {TipComponent} from './tip/tip.component';
import {CdkPlatformModule} from './platform/cdk-platform.module';
import {CdkObserversModule} from './observers/cdk-observers.module';
import {CdkDragDropModule} from './drag-drop/cdk-drag-drop.module';
import {CdkTextFieldModule} from "./text-field/cdk-text-field.module";
import {CdkWorkflowStepperModule} from "./workflow-stepper/cdk-workflow-stepper.module";
import {CdkBaseTableModule} from './table/cdk-base-table.module';

const appRoutes: Routes = [
    {
        path: 'coercion',
        loadChildren: () => CdkCoercionModule
    }, {
        path: 'layout',
        loadChildren: () => CdkLayoutModule
    }, {
        path: 'keycodes',
        loadChildren: () => CdkKeyCodesModule
    }, {
        path: 'accessibility',
        loadChildren: () => CdkAccessibilityModule
    }, {
        path: 'bidi',
        loadChildren: () => CdkBidiModule
    }, {
        path: 'scrolling',
        loadChildren: () => CdkScrollingModule
    }, {
        path: 'portal',
        loadChildren: () => CdkLPortalModule
    }, {
        path: 'overlay',
        loadChildren: () => CdkOverlayModule
    }, {
        path: 'platform',
        loadChildren: () => CdkPlatformModule
    }, {
        path: 'observers',
        loadChildren: () => CdkObserversModule
    }, {
        path: 'dragDrop',
        loadChildren: () => CdkDragDropModule
    }, {
        path: 'stepper',
        loadChildren: () => CdkWorkflowStepperModule
    }, {
        path: 'table',
        loadChildren: () => CdkBaseTableModule
    }, {
        path: 'textField',
        loadChildren: () => CdkTextFieldModule
    }, {
        path: 'tip',
        component: TipComponent
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
