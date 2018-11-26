import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
    selector: 'app-drag-drop-disable-drag',
    templateUrl: './drag-drop-disable-drag.component.html',
    styleUrls: ['./drag-drop-disable-drag.component.less']
})
export class DragDropDisableDragComponent {

    items = [
        {value: 'I can be dragged', disabled: false},
        {value: 'I cannot be dragged', disabled: true},
        {value: 'I can also be dragged', disabled: false}
    ];

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    }

}
