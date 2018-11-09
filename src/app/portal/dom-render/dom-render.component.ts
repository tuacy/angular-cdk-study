import {ApplicationRef, Component, ComponentFactoryResolver, Injector, OnInit} from '@angular/core';
import {ChildComponent} from '../child-component/child.component';

@Component({
    selector: 'app-dom-render',
    template: `<p>test</p>`
})
export class DomRenderComponent implements OnInit {
    private componentRef;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private injector: Injector,
        private appRef: ApplicationRef
    ) {
    }

    ngOnInit() {
        // Locate an element that exists on the page
        const headerElement = document.querySelector('#domRenderChild');
        // Locate the component factory for the HeaderComponent
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ChildComponent);
        // Generate an instance of the HeaderComponent
        this.componentRef = componentFactory.create(this.injector, [], headerElement);
        // Attach to the component to Angular's component tree for dirty checking
        this.appRef.attachView(this.componentRef.hostView);
    }

}
