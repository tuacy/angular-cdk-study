import {Component, Injector, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
    selector: 'app-portal-template',
    template: `
        <ng-template #testTemplate let-name>
            <div>User {{ name }}</div>
        </ng-template>
    `
})
export class PortalTemplateComponent implements OnInit {

    private componentRef;
    @ViewChild('testTemplate') testTemplate: TemplateRef<any>;

    constructor(
        private injector: Injector,
        private viewContainerRef: ViewContainerRef,
    ) {
    }

    ngOnInit() {
        // Locate an element that exists on the page
        const headerElement = document.querySelector('#portalTemplateChild');
        // Locate the component factory for the HeaderComponent
        const embeddedView = this.viewContainerRef.createEmbeddedView(
            this.testTemplate,
            {$implicit: 'Bob'},
        );
        // Place element in correct location in DOM
        embeddedView.rootNodes.forEach(rootNode => headerElement.appendChild(rootNode));
    }

}
