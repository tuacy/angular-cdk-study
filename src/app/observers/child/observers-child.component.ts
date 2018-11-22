import {Component} from '@angular/core';

@Component({
    selector: 'app-observers-child',
    templateUrl: './observers-child.component.html',
    styleUrls: ['./observers-child.component.less']
})
export class ObserversChildComponent {

    count = 0;

    projectContentChanged($event: MutationRecord[]) {
        ++this.count;
        console.log(`ng-content内容改变了，第${this.count}次`);
        console.log($event, this.count);
    }


}
