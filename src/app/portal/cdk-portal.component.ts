import {
    AfterViewInit,
    ApplicationRef,
    Component,
    ComponentFactoryResolver,
    ElementRef,
    Inject,
    Injector,
    QueryList,
    TemplateRef,
    ViewChild,
    ViewChildren,
    ViewContainerRef
} from '@angular/core';
import {ComponentPortal, DomPortalOutlet, TemplatePortal, TemplatePortalDirective} from '@angular/cdk/portal';
import {PortalChildComponent} from './portal-child-component/portal-child.component';
import {DOCUMENT} from '@angular/common';

@Component({
    selector: 'app-cdk-portal',
    templateUrl: './cdk-portal.component.html',
    styleUrls: ['./cdk-portal.component.less']
})
export class CdkPortalComponent implements AfterViewInit {

    // 获取到对应html里面所有添加了cdkPortal指令的元素的TemplatePortal
    @ViewChildren(TemplatePortalDirective) templatePortals: QueryList<TemplatePortal<any>>;
    // 获取单个的cdkPortal指令的元素的TemplatePortal 【#templatePortal="cdkPortal"】
    @ViewChild('templatePortal') divTemplatePortal: TemplatePortal<any>;

    @ViewChild('outOfApp') templateOutOfApp: TemplateRef<any>;
    private _domPortalOutletOutOfApp: DomPortalOutlet;

    selectedPortal;

    ctx = {
        $implicit: {
            name: 'John',
            age: 34
        },
        location: 'USA'
    };


    constructor(@Inject(DOCUMENT) private document: any,
                private elementRef: ElementRef,
                private injector: Injector,
                private appRef: ApplicationRef,
                private viewContainerRef: ViewContainerRef,
                private componentFactoryResolver: ComponentFactoryResolver) {
    }

    ngAfterViewInit(): void {
        /**
         * 把内容放置在 <app-root标签之外>
         */
        const element = this.document.createElement('div');
        this.document.body.appendChild(element);
        this._domPortalOutletOutOfApp = new DomPortalOutlet(element, this.componentFactoryResolver, this.appRef, this.injector);
        const templatePortal = new TemplatePortal(
            this.templateOutOfApp,
            this.viewContainerRef
        );
        this._domPortalOutletOutOfApp.attach(templatePortal);

        console.log(this.divTemplatePortal);
    }

    cdkPortalFirst() {
        this.templatePortals.first.context = this.ctx;
        this.selectedPortal = this.templatePortals.first;
    }

    cdkPortalLast() {
        this.selectedPortal = this.templatePortals.last;
    }

    cdkPortalComponent() {
        this.selectedPortal = new ComponentPortal(PortalChildComponent);
    }

    onPortalAttached() {
        console.log('cdkPortalOutlet上有组件attach上来了');
    }
}
