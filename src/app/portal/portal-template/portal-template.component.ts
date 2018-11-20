import {
    ApplicationRef,
    Component,
    ComponentFactoryResolver,
    ElementRef,
    Injector,
    OnInit,
    TemplateRef,
    ViewChild,
    ViewContainerRef
} from '@angular/core';
import {DomPortalHost, TemplatePortal} from "@angular/cdk/portal";

@Component({
    selector: 'app-portal-template',
    template: `
        <ng-template #testTemplate let-name>
            <div>User {{ name }}</div>
        </ng-template>
    `
})
export class PortalTemplateComponent implements OnInit {

    private portalHost: DomPortalHost;
    @ViewChild('testTemplate') testTemplate: TemplateRef<any>;

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
        const templatePortal = new TemplatePortal(
            this.testTemplate,
            this.viewContainerRef,
            {
                $implicit: "ng template 传递数据",
            }
        );
        this.portalHost.attach(templatePortal);
    }

}
