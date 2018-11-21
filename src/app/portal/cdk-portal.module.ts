import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CdkPortalRoutingModule} from './cdk-portal-routing.module';
import {CdkPortalComponent} from './cdk-portal.component';
import {PortalChildComponent} from './portal-child-component/portal-child.component';
import {PortalComponentComponent} from './portal-component/portal-component.component';
import {PortalTemplateComponent} from './portal-template/portal-template.component';
import {PortalModule} from "@angular/cdk/portal";
import {ToolTipDirective} from './portal-tool-tip/tool-tip.directive';
import { ToolTipComponent } from './portal-tool-tip/tool-tip.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        PortalModule,
        CdkPortalRoutingModule
    ],
    declarations: [
        CdkPortalComponent,
        PortalChildComponent,
        PortalComponentComponent,
        PortalTemplateComponent,
        ToolTipDirective,
        ToolTipComponent
    ],
    entryComponents: [
        PortalChildComponent,
        ToolTipComponent
    ]
})
export class CdkLPortalModule {
}
