import {Component} from '@angular/core';
import {DELETE, ENTER, hasModifierKey, MAC_ENTER, TAB} from '@angular/cdk/keycodes';

@Component({
    selector: 'app-key-codes',
    templateUrl: './cdk-key-codes.component.html',
    styleUrls: ['./cdk-key-codes.component.less']
})
export class CdkKeyCodesComponent {

    onKeyDown(event) {
        /**
         * 组合按键判断(如果按下的是 ctr按键 + 其他的按键的时候 返回true)
         */
        console.log(hasModifierKey(event, 'ctrlKey'));
        /**
         * 打印按键值
         */
        console.log(event.keyCode);
        /**
         * 通过 cdk 判断按键类型
         */
        switch (event.keyCode) {
            case MAC_ENTER:
            case ENTER:
                console.log('当前按键: Enter键');
                break;
            case TAB:
                console.log('当前按键: Tab键');
                break;
            case DELETE:
                console.log('当前按键: Delete键');
                break;
        }
    }

}
