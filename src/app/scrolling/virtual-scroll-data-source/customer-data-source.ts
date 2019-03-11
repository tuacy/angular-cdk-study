import {BehaviorSubject, Observable, Subscription} from "rxjs";
import {CollectionViewer, DataSource} from "@angular/cdk/collections";

export class CustomerDataSource extends DataSource<string | undefined>{

    private length = 100000;
    private pageSize = 100;
    private cachedData = Array.from<string>({length: this.length});
    private fetchedPages = new Set<number>();
    private dataStream = new BehaviorSubject<(string | undefined)[]>(this.cachedData);
    private subscription = new Subscription();

    connect(collectionViewer: CollectionViewer): Observable<(string | undefined)[]> {
        this.subscription.add(collectionViewer.viewChange.subscribe(range => {
            const startPage = this.getPageForIndex(range.start);
            const endPage = this.getPageForIndex(range.end - 1);
            for (let i = startPage; i <= endPage; i++) {
                this.fetchPage(i);
            }
        }));
        return this.dataStream;
    }

    disconnect(): void {
        this.subscription.unsubscribe();
    }

    private getPageForIndex(index: number): number {
        return Math.floor(index / this.pageSize);
    }

    private fetchPage(page: number) {
        if (this.fetchedPages.has(page)) {
            return;
        }
        this.fetchedPages.add(page);

        // Use `setTimeout` to simulate fetching data from server.
        setTimeout(() => {
            this.cachedData.splice(page * this.pageSize, this.pageSize,
                ...Array.from({length: this.pageSize})
                    .map((_, i) => `Item #${page * this.pageSize + i}`));
            this.dataStream.next(this.cachedData);
        }, Math.random() * 1000 + 200);
    }
}
