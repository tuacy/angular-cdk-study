import {Component, QueryList, ViewChildren} from '@angular/core';
import {ComponentPortal, Portal, TemplatePortalDirective} from '@angular/cdk/portal';
import {PortalChildComponent} from './portal-child-component/portal-child.component';

@Component({
    selector: 'app-cdk-portal',
    templateUrl: './cdk-portal.component.html',
    styleUrls: ['./cdk-portal.component.less']
})
export class CdkPortalComponent {

    @ViewChildren(TemplatePortalDirective) templatePortals: QueryList<Portal<any>>;
    selectedPortal;

    cdkPortalFirst() {
        this.selectedPortal = this.templatePortals.first;
    }

    cdkPortalLast() {
        this.selectedPortal = this.templatePortals.last;
    }

    cdkPortalComponent() {
        this.selectedPortal = new ComponentPortal(PortalChildComponent);
    }

    onPortalAttached() {
        console.log("cdkPortalOutlet上有组件attach上来了");
    }
}
