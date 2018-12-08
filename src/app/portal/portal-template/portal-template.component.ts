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
        <!-- 我们定义一个ng-template节点，并且需要传递一个参数 -->
        <ng-template #portalTemplate let-data>
            <div>参数: {{ data }}</div>
        </ng-template>
    `
})
export class PortalTemplateComponent implements OnInit {

    @ViewChild('portalTemplate') testTemplate: TemplateRef<any>;

    constructor(
        private elementRef: ElementRef,
        private injector: Injector,
        private appRef: ApplicationRef,
        private viewContainerRef: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver,
    ) {
    }

    ngOnInit() {

        // 1. DomPortalHost
        const portalHost = new DomPortalHost(
            this.elementRef.nativeElement as HTMLElement,
            this.componentFactoryResolver,
            this.appRef,
            this.injector
        );
        // 2. TemplatePortal
        const templatePortal = new TemplatePortal(
            this.testTemplate,
            this.viewContainerRef,
            {
                $implicit: "我是传递进来的数据",
            }
        );
        // 3. attach
        portalHost.attach(templatePortal);
    }

}
