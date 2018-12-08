import {Component, EventEmitter, Inject, InjectionToken} from '@angular/core';

/**
 * 用于动态创建PortalChildComponent的时候传递参数
 */
export const PORTAL_CHILD_DATA = new InjectionToken<any>('PORTAL_CHILD_DATA');

@Component({
    selector: 'app-portal-child',
    template: `
        <h1>portal child show</h1>
        <button (click)="onButtonClick()">点击</button>
    `
})
export class PortalChildComponent {

    outEvent: EventEmitter<string>;

    /**
     * 构造函数
     * @param initData 创建组件的时候传递过来的参数(为了测试用了any类型，推荐根据业务使用特定的类型，尽量不要使用any)
     */
    constructor(@Inject(PORTAL_CHILD_DATA) public initData: any) {
        console.log(initData);
    }

    /**
     * 用来测试把Portal里面的事件返回上去
     */
    onButtonClick() {
        if (this.outEvent != null) {
            this.outEvent.emit('child 里面被点击了');
        }
    }

}
