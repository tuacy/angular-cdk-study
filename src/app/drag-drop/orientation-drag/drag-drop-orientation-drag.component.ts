import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop-orientation-drag',
  templateUrl: './drag-drop-orientation-drag.component.html',
  styleUrls: ['./drag-drop-orientation-drag.component.less']
})
export class DragDropOrientationDragComponent {

    timePeriods = [
        'Bronze age',
        'Iron age',
        'Middle ages',
        'Early modern period',
        'Long nineteenth century'
    ];

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
    }

}
