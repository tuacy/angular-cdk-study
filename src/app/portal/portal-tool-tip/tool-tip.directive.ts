import {
    ApplicationRef, ComponentFactoryResolver,
    Directive,
    ElementRef,
    HostBinding,
    HostListener,
    Injector,
    Input,
    OnInit,
    ViewContainerRef
} from '@angular/core';
import {DomPortalHost, TemplatePortal} from "@angular/cdk/portal";
import {ToolTipComponent} from "./tool-tip.component";

@Directive({
    selector: '[appToolTip]'
})
export class ToolTipDirective implements OnInit {

    @Input('tooltipText')
    tooltipText: string;

    tooltipPortalHost: DomPortalHost;
    templatePortal: TemplatePortal<any>;

    @HostBinding('style.position') position = 'relative';

    @HostListener('mouseenter')
    onMouseEnter() {
        this.show();
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        this.hide();
    }

    constructor(
        private elementRef: ElementRef,
        private injector: Injector,
        private appRef: ApplicationRef,
        private viewContainerRef: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver,
    ) {
    }

    ngOnInit() {
        this.createContainerTemplate();
    }

    private createContainerTemplate() {
        this.tooltipPortalHost = new DomPortalHost(
            (this.elementRef.nativeElement as HTMLElement),
            this.componentFactoryResolver,
            this.appRef,
            this.injector
        );

        const tooltipComponent = this.componentFactoryResolver.resolveComponentFactory(ToolTipComponent);
        const tooltipComponentRef = tooltipComponent.create(this.injector);

        this.templatePortal = new TemplatePortal(
            tooltipComponentRef.instance.tooltip,
            this.viewContainerRef,
            {
                // Pass the tooltip text as $implicit so it's the
                // default variable for use within the templateRef
                $implicit: this.tooltipText,
            }
        );
    }

    private show() {
        if (!this.templatePortal.isAttached) {
            this.tooltipPortalHost.attach(this.templatePortal);
        }
    }

    private hide() {
        this.tooltipPortalHost.detach();
    }

}
