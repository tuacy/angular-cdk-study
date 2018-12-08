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
import {ComponentRef} from "@angular/core";

@Directive({
    selector: '[appToolTip]'
})
export class ToolTipDirective implements OnInit {

    @Input('tooltipText')
    tooltipText: string;

    private _tooltipPortalHost: DomPortalHost;
    private _templatePortal: TemplatePortal<any>;

    @HostBinding('style.position') position = 'relative';

    /**
     * 鼠标移入的时候显示
     */
    @HostListener('mouseenter')
    onMouseEnter() {
        this.show();
    }

    /**
     * 鼠标移出的时候隐藏
     */
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
        this._tooltipPortalHost = new DomPortalHost(
            (this.elementRef.nativeElement as HTMLElement),
            this.componentFactoryResolver,
            this.appRef,
            this.injector
        );

        const tooltipComponent = this.componentFactoryResolver.resolveComponentFactory(ToolTipComponent);
        const tooltipComponentRef: ComponentRef<ToolTipComponent> = tooltipComponent.create(this.injector);

        this._templatePortal = new TemplatePortal(
            tooltipComponentRef.instance.tooltip,
            this.viewContainerRef,
            {
                $implicit: this.tooltipText,
            }
        );
    }

    /**
     * 显示
     */
    private show() {
        if (!this._templatePortal.isAttached) {
            this._tooltipPortalHost.attach(this._templatePortal);
        }
    }

    /**
     * 隐藏
     */
    private hide() {
        this._tooltipPortalHost.detach();
    }

}
