import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {DIR_DOCUMENT, Directionality} from '@angular/cdk/bidi';
import {Subscription} from "rxjs";

@Component({
    selector: 'app-cdk-bidi',
    templateUrl: './cdk-bidi.component.html',
    styleUrls: ['./cdk-bidi.component.less']
})
export class CdkBidiComponent implements OnInit, OnDestroy {
    dir = "rtl";
    /** Subscription to the Directionality change EventEmitter. */
    private _dirChangeSubscription = Subscription.EMPTY;

    constructor(
        @Inject(DIR_DOCUMENT) public dirDoc: any,
        public directionality: Directionality
    ) {
        this._dirChangeSubscription = directionality.change.subscribe(() => {
        });
    }

    ngOnInit() {
        // 获取document
        console.log(this.dirDoc);
        // ltr 获取当前值
        const dir = this.directionality.value;
        console.log("dir is ", dir);
    }

    ngOnDestroy() {
        this._dirChangeSubscription.unsubscribe();
    }

    switchDir() {
        if (this.dir === "rtl") {
            this.dir = "ltr";
        } else {
            this.dir = "rtl";
        }
    }

    dirChange() {
        console.log('aaa');
    }
}
