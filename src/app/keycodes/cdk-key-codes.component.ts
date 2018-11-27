import {Component} from '@angular/core';
import {DELETE, ENTER, MAC_ENTER, TAB} from "@angular/cdk/keycodes";

@Component({
    selector: 'app-key-codes',
    templateUrl: './cdk-key-codes.component.html',
    styleUrls: ['./cdk-key-codes.component.less']
})
export class CdkKeyCodesComponent {

    onKeyDown(event) {
        console.log(event.keyCode);
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
