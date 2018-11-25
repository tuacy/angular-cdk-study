import {Component} from '@angular/core';
import {CdkDrag, CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop-controlling-with-item',
  templateUrl: './drag-drop-controlling-with-item.component.html',
  styleUrls: ['./drag-drop-controlling-with-item.component.less']
})
export class DragDropControllingWithItemComponent {

    all = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    even = [10];

    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex);
        }
    }

    /** Predicate function that only allows even numbers to be dropped into a list. */
    evenPredicate(item: CdkDrag<number>) {
        return item.data % 2 === 0;
    }

    /** Predicate function that doesn't allow items to be dropped into a list. */
    noReturnPredicate() {
        return false;
    }

}
