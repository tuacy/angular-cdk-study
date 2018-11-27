import {Component, OnInit} from '@angular/core';
import {
    _isNumberValue,
    coerceArray,
    coerceBooleanProperty,
    coerceCssPixelValue,
    coerceNumberProperty
} from "@angular/cdk/coercion";

@Component({
    selector: 'app-cdk-coercion',
    templateUrl: './cdk-coercion.component.html',
    styleUrls: ['./cdk-coercion.component.less']
})
export class CdkCoercionComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        // 转boolean
        console.log("转boolean: " + coerceBooleanProperty('false'));
        // 转number
        console.log("转number: " + coerceNumberProperty(10.5));
        console.log("是否是number类型: " + coerceNumberProperty('a', this.coerceNumberFallback()));
        console.log("是否是number类型: " + _isNumberValue('a'));
        // 转数组
        console.log("转换为数组: " + coerceArray(1204));
        // 转CSS pixel value
        console.log("转CSS像素: " + coerceCssPixelValue('10'));
    }

    /**
     * 当转number的时候发生了错误时候的返回值
     */
    coerceNumberFallback() {
        return 10;
    }

}
