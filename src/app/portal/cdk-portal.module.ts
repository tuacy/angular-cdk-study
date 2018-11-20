import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CdkPortalRoutingModule} from './cdk-portal-routing.module';
import {CdkPortalComponent} from './cdk-portal.component';
import {PortalChildComponent} from './portal-child-component/portal-child.component';
import {PortalComponentComponent} from './portal-component/portal-component.component';
import {PortalTemplateComponent} from './portal-template/portal-template.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CdkPortalRoutingModule
    ],
    declarations: [
        CdkPortalComponent,
        PortalChildComponent,
        PortalComponentComponent,
        PortalTemplateComponent
    ],
    entryComponents: [
        PortalChildComponent
    ]
})
export class CdkLPortalModule {
}
