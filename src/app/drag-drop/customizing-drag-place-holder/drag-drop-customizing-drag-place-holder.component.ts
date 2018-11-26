import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
    selector: 'app-drag-drop-customizing-drag-place-holder',
    templateUrl: './drag-drop-customizing-drag-place-holder.component.html',
    styleUrls: ['./drag-drop-customizing-drag-place-holder.component.less']
})
export class DragDropCustomizingDragPlaceHolderComponent {

    movies = [
        'Episode I - The Phantom Menace',
        'Episode II - Attack of the Clones',
        'Episode III - Revenge of the Sith',
        'Episode IV - A New Hope',
        'Episode V - The Empire Strikes Back',
        'Episode VI - Return of the Jedi',
        'Episode VII - The Force Awakens',
        'Episode VIII - The Last Jedi'
    ];

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    }
}
