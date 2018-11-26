import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CdkDrag} from "@angular/cdk/drag-drop";

@Component({
    selector: 'app-drag-drop-drop',
    templateUrl: './drag-drop-drop.component.html',
    styleUrls: ['./drag-drop-drop.component.less']
})
export class DragDropDropComponent implements AfterViewInit {

    @ViewChild(CdkDrag) cdkDragDirective: CdkDrag;

    constructor() {
    }

    ngAfterViewInit() {
        console.log(this.cdkDragDirective.getPlaceholderElement());
    }

}
