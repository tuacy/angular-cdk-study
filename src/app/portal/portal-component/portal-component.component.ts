import {ApplicationRef, Component, ComponentFactoryResolver, Injector, OnInit} from '@angular/core';
import {ComponentPortal, DomPortalHost} from '@angular/cdk/portal';
import {ChildComponent} from '../child-component/child.component';

@Component({
    selector: 'app-portal-component',
    template: ``
})
export class PortalComponentComponent implements OnInit {
    private portalHost: DomPortalHost;
    private portal: ComponentPortal<ChildComponent>;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private injector: Injector,
        private appRef: ApplicationRef,
    ) {
    }

    ngOnInit() {
        // Create a portalHost from a DOM element
        this.portalHost = new DomPortalHost(
            document.querySelector('#portalComponentChild'),
            this.componentFactoryResolver,
            this.appRef,
            this.injector
        );

        // Locate the component factory for the HeaderComponent
        this.portal = new ComponentPortal(ChildComponent);

        // Attach portal to host
        this.portalHost.attach(this.portal);
    }

}
