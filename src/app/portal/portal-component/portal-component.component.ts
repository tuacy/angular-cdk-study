import {
    ApplicationRef,
    Component,
    ComponentFactoryResolver, ComponentRef,
    ElementRef, EventEmitter,
    Injector, OnDestroy,
    OnInit,
    ViewContainerRef
} from '@angular/core';
import {ComponentPortal, DomPortalHost, PortalInjector} from '@angular/cdk/portal';
import {PORTAL_CHILD_DATA, PortalChildComponent} from '../portal-child-component/portal-child.component';
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
    selector: 'app-portal-component',
    template: ``
})
export class PortalComponentComponent implements OnInit, OnDestroy {

    private portalHost: DomPortalHost;
    private _$destroy = new Subject();

    constructor(
        private elementRef: ElementRef,
        private injector: Injector,
        private appRef: ApplicationRef,
        private viewContainerRef: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver,
    ) {
    }

    ngOnInit() {
        // 1. 创建DomPortalHost
        this.portalHost = new DomPortalHost(
            this.elementRef.nativeElement as HTMLElement,
            this.componentFactoryResolver,
            this.appRef,
            this.injector
        );
        // injectionTokens用于传递参数，如果不想传递参数，直接const templatePortal = new ComponentPortal(PortalChildComponent) 就可以了
        const injectionTokens = new WeakMap();
        injectionTokens.set(PORTAL_CHILD_DATA, '构建组件传递的参数');

        // 2. 创建ComponentPortal
        const templatePortal = new ComponentPortal(PortalChildComponent
            , this.viewContainerRef
            , new PortalInjector(this.injector, injectionTokens)
            , this.componentFactoryResolver);

        // 3. ComponentPortal attach 到DomPortalHost里面去, 并且把ComponentPortal里面的时间返回上来
        // 如果不需要传出参数，this.portalHost.attach(templatePortal); 就可以了
        const portalComponentRef: ComponentRef<PortalChildComponent> = this.portalHost.attachComponentPortal(templatePortal);
        // 处理返回回来的事件
        const eventEmitter: EventEmitter<string> = new EventEmitter<string>();
        portalComponentRef.instance.outEvent = eventEmitter;
        eventEmitter.pipe(takeUntil(this._$destroy))
            .subscribe((event: string) => this.handlerPortalEvent(event));
    }

    private handlerPortalEvent(event: string): void {
        console.log('收到了Portal返回上来的事件信息:' + event);
    }

    ngOnDestroy(): void {
        this._$destroy.next();
        this._$destroy.complete();
    }

}
