import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CdkScrollable, ScrollDispatcher, ViewportRuler} from '@angular/cdk/overlay';

@Component({
    selector: 'app-cdk-scrolling',
    templateUrl: './cdk-scrolling.component.html',
    styleUrls: ['./cdk-scrolling.component.less']
})
export class CdkScrollingComponent implements OnInit, AfterViewInit {

    @ViewChild('scrollingParent')
    childDiv: ElementRef;

    constructor(private scrollDispatcher: ScrollDispatcher, private viewPortRuler: ViewportRuler) {
    }

    ngOnInit() {
        this.scrollDispatcher.scrolled().subscribe((scrollable: CdkScrollable) => {
            if (scrollable) {
                console.log('发生scroll了，來源于：');
                console.log(scrollable.getElementRef().nativeElement);
            }
        });

        /**
         * ViewportRuler 用来监听窗口的大小
         */
        // { width, height }
        console.log(this.viewPortRuler.getViewportSize());

        // { bottom, height, left, right, top, width }
        console.log(this.viewPortRuler.getViewportRect());

        // { top, left }
        console.log(this.viewPortRuler.getViewportScrollPosition());

        // native resize event object
        this.viewPortRuler.change().subscribe(resizeEvent => console.log(resizeEvent));

    }

    ngAfterViewInit(): void {
        /**
         * 第二个参数auditTimeInMs表示事件延时多少秒发生
         * 当祖先设置了cdkScrollable指令，在孩子里面也能抓到scrolling事件
         */
        this.scrollDispatcher.ancestorScrolled(this.childDiv).subscribe((scrollable: CdkScrollable) => {
            if (scrollable) {
                console.log('祖先发生scroll了，來源于：');
                console.log(scrollable.getElementRef().nativeElement);
            }
        });

        // 获取ScrollDispatcher里面所有注册了scrolling的组件信息
        console.log(this.scrollDispatcher.scrollContainers);
    }
}
