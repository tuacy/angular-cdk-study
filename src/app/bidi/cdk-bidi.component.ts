import {Component, Inject, OnInit} from '@angular/core';
import {DIR_DOCUMENT, Directionality} from '@angular/cdk/bidi';

@Component({
    selector: 'app-cdk-bidi',
    templateUrl: './cdk-bidi.component.html',
    styleUrls: ['./cdk-bidi.component.less']
})
export class CdkBidiComponent implements OnInit {
    dir = "rtl";

    constructor(
        @Inject(DIR_DOCUMENT) public dirDoc: any,
        public directionlity: Directionality
    ) {}

    ngOnInit() {
        // 获取document
        console.log(this.dirDoc);
        // ltr 获取当前值
        const dir = this.directionlity.value;
        console.log("dir is ", dir);
    }

    switchDir() {
        if (this.dir === "rtl") {
            this.dir = "ltr";
        } else {
            this.dir = "rtl";
        }
    }
}
