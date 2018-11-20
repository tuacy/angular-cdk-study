import {
    ApplicationRef,
    Component,
    ComponentFactoryResolver,
    ElementRef,
    Injector,
    OnInit,
    ViewContainerRef
} from '@angular/core';
import {ComponentPortal, DomPortalHost} from '@angular/cdk/portal';
import {PortalChildComponent} from '../portal-child-component/portal-child.component';

@Component({
    selector: 'app-portal-component',
    template: ``
})
export class PortalComponentComponent implements OnInit {
    private portalHost: DomPortalHost;

    constructor(
        private elementRef: ElementRef,
        private injector: Injector,
        private appRef: ApplicationRef,
        private viewContainerRef: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver,
    ) {
    }

    ngOnInit() {
        this.portalHost = new DomPortalHost(
            this.elementRef.nativeElement as HTMLElement,
            this.componentFactoryResolver,
            this.appRef,
            this.injector
        );
        // 关于组件传递参数，我们将在后面讲到
        const templatePortal = new ComponentPortal(PortalChildComponent);
        this.portalHost.attach(templatePortal);
    }

}
