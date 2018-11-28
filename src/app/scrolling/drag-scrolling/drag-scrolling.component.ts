import {AfterViewInit, Component, ElementRef, OnDestroy, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {CdkDrag, CdkDragDrop, CdkDragMove, moveItemInArray} from '@angular/cdk/drag-drop';
import {merge, Subscription} from 'rxjs';
import {map, startWith, switchMap, tap} from 'rxjs/operators';

const speed = 10;

@Component({
    selector: 'app-drag-scrolling',
    templateUrl: './drag-scrolling.component.html',
    styleUrls: ['./drag-scrolling.component.less']
})
export class DragScrollingComponent implements AfterViewInit, OnDestroy {
    movies = [
        'Episode I - The Phantom Menace',
        'Episode II - Attack of the Clones',
        'Episode III - Revenge of the Sith',
        'Episode IV - A New Hope',
        'Episode V - The Empire Strikes Back',
        'Episode VI - Return of the Jedi',
        'Episode VII - The Force Awakens',
        'Episode VIII - The Last Jedi',
        'Rouge One',
        'Solo',
        'Clone Wars'
    ];

    animationFrame: number | undefined;

    @ViewChild('scrollEl')
    scrollEl: ElementRef<HTMLElement>;

    @ViewChildren(CdkDrag)
    dragEls: QueryList<CdkDrag>;

    subs = new Subscription();

    ngOnDestroy(): void {
        this.subs.unsubscribe();
    }

    ngAfterViewInit() {
        const onMove$ = this.dragEls.changes.pipe(
            startWith(this.dragEls)
            , map((d: QueryList<CdkDrag>) => d.toArray())
            , map(dragels => dragels.map(drag => drag.moved))
            , switchMap(obs => merge(...obs))
            , tap(this.triggerScroll)
        );

        this.subs.add(onMove$.subscribe());

        const onDown$ = this.dragEls.changes.pipe(
            startWith(this.dragEls)
            , map((d: QueryList<CdkDrag>) => d.toArray())
            , map(dragels => dragels.map(drag => drag.ended))
            , switchMap(obs => merge(...obs))
            , tap(this.cancelScroll)
        );

        this.subs.add(onDown$.subscribe());
    }

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    }

    public triggerScroll($event: CdkDragMove) {
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
            this.animationFrame = undefined;
        }
        this.animationFrame = requestAnimationFrame(() => this.scroll($event));
    }

    private cancelScroll() {
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
            this.animationFrame = undefined;
        }
    }

    private scroll($event: CdkDragMove) {
        const {y} = $event.pointerPosition;
        const baseEl = this.scrollEl.nativeElement;
        const box = baseEl.getBoundingClientRect();
        const scrollTop = baseEl.scrollTop;
        const top = box.top + -y;
        if (top > 0 && scrollTop !== 0) {
            const newScroll = scrollTop - speed * Math.exp(top / 50);
            baseEl.scrollTop = newScroll;
            this.animationFrame = requestAnimationFrame(() => this.scroll($event));
            return;
        }

        const bottom = y - box.bottom;
        if (bottom > 0 && scrollTop < box.bottom) {
            const newScroll = scrollTop + speed * Math.exp(bottom / 50);
            baseEl.scrollTop = newScroll;
            this.animationFrame = requestAnimationFrame(() => this.scroll($event));
        }
    }
}
