import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState, MediaMatcher} from '@angular/cdk/layout';

@Component({
    selector: 'app-cdk-layout',
    templateUrl: './cdk-layout.component.html',
    styleUrls: ['./cdk-layout.component.less']
})
export class CdkLayoutComponent implements OnInit, OnDestroy {

    matcher: MediaQueryList;

    // @HostListener('window:resize')
    // public onWindowResize(): void {
    //     if (window.innerWidth >= 960) {
    //         console.log('>= 960');
    //     } else if (window.innerWidth >= 600 && window.innerWidth < 960) {
    //         console.log('>= 600 && < 960');
    //     } else {
    //         console.log('< 600');
    //     }
    // }

    constructor(public breakpointObserver: BreakpointObserver, public mediaMatcher: MediaMatcher) {
    }

    ngOnInit() {

        // 简单的一次性匹配，可以使用isMatching方法。如果组件初始化时窗口至少为40rem高，则输出到控制台
        if (this.breakpointObserver.isMatched('(min-height: 40rem)')) {
            console.log('窗口至少为40rem高!');
        } else {
            console.log('窗口没有40rem高!');
        }

        // 注意哦，不会一直回调哦，只会在第一次满足或者不满足条件的时候回调。
        this.breakpointObserver
            .observe(['(min-width: 500px)'])
            .subscribe((state: BreakpointState) => {
                if (state.matches) {
                    console.log('窗口宽度大于或者等于500px!');
                } else {
                    console.log('窗口不满足宽度大于或者等于500px!');
                }
            });

        // 也可以使用Breakpoints对象，而不是使用手写的媒体查询，它为我们提供了常见断点的键。如果多个参数，当有一个条件满足或者不满足的时候就会触发
        this.breakpointObserver
            .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
            .subscribe((state: BreakpointState) => {
                if (state.matches) {
                    console.log(
                        'Breakpoints.Small or Breakpoints.HandsetPortrait'
                    );
                }
            });


        this.matcher = this.mediaMatcher.matchMedia('(min-width: 500px)');
        this.matcher.addListener(this.matchMediaListener);

        // // 在程序加载时判断当前设备是横屏还是竖屏
        // const isPortrait = window.matchMedia('(orientation: portrait)').matches;
        // if (isPortrait) {
        //     console.log('This is portrait');
        // }
        //
        // // 初始化时窗口的大小等等
        // if (window.innerWidth >= 960) {
        //     console.log('>= 960');
        // } else {
        //     console.log('< 960');
        // }
    }

    ngOnDestroy() {
        this.matcher.removeListener(this.matchMediaListener);
    }

    matchMediaListener(event) {
        console.log(event.matches ? 'match' : 'no match');
    }

}
