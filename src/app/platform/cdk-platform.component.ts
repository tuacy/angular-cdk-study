import {Component} from '@angular/core';
import {getSupportedInputTypes, Platform, supportsPassiveEventListeners, supportsScrollBehavior} from '@angular/cdk/platform';

@Component({
    selector: 'app-cdk-platform',
    templateUrl: './cdk-platform.component.html',
    styleUrls: ['./cdk-platform.component.less']
})
export class CdkPlatformComponent {

    /**
     * 获取支持的输入类型
     */
    supportedInputTypes = Array.from(getSupportedInputTypes()).join(', ');
    /**
     * 是否支持被动事件监听器
     */
    supportsPassiveEventListeners = supportsPassiveEventListeners();
    /**
     * 是否支持滑动行为
     */
    supportsScrollBehavior = supportsScrollBehavior();

    /**
     * Platform Service引入进来
     */
    constructor(public platform: Platform) {
    }
}
