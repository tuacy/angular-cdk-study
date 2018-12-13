import {Component, ElementRef, ViewChild, ViewContainerRef, ViewEncapsulation} from '@angular/core';
import {Overlay, OverlayConfig, OverlayRef} from '@angular/cdk/overlay';
import {ComponentPortal, TemplatePortalDirective} from '@angular/cdk/portal';
import {OverlayPanelComponent} from './panel/overlay-panel.component';

@Component({
    selector: 'app-cdk-overlay',
    templateUrl: './cdk-overlay.component.html',
    styleUrls: ['./cdk-overlay.component.less'],
    encapsulation: ViewEncapsulation.None,
    preserveWhitespaces: false,
})
export class CdkOverlayComponent {


    isMenuOpen = false;
    globalOverlayPosition = 0;
    actionMenuItemList = ['第一项item', '第二项item'];
    private _overlayTemplateRef: OverlayRef;
    private _overlayConnectRef: OverlayRef;

    @ViewChild('overlayGlobalTemplate') templateGlobalPortals: TemplatePortalDirective;
    @ViewChild('connectComponentOrigin') _overlayConnectComponentOrigin: ElementRef;
    @ViewChild('connectTemplateOrigin') _overlayConnectTemplateOrigin: ElementRef;
    @ViewChild('overlayConnectTemplate') _overlayOriginTemplateDirective: TemplatePortalDirective;

    constructor(public overlay: Overlay
        , public viewContainerRef: ViewContainerRef) {
    }

    /**
     * overlay 在整个屏幕的中间显示
     */
    showOverlayGlobalPanelCenter() {
        // config: OverlayConfig overlay的配置，配置显示位置，和滑动策略
        const config = new OverlayConfig();
        config.positionStrategy = this.overlay.position()
            .global() // 全局显示
            .centerHorizontally() // 水平居中
            .centerVertically(); // 垂直居中
        config.hasBackdrop = true; // 设置overlay后面有一层背景, 当然你也可以设置backdropClass 来设置这层背景的class
        const overlayRef = this.overlay.create(config); // OverlayRef, overlay层
        overlayRef.backdropClick().subscribe(() => {
            // 点击了backdrop背景
            overlayRef.dispose();
        });
        // OverlayPanelComponent是动态组件
        // 创建一个ComponentPortal，attach到OverlayRef，这个时候我们这个overlay层就显示出来了。
        overlayRef.attach(new ComponentPortal(OverlayPanelComponent, this.viewContainerRef));
        // 监听overlayRef上的键盘按键事件
        overlayRef.keydownEvents().subscribe((event: KeyboardEvent) => {
            console.log(overlayRef._keydownEventSubscriptions + ' times');
            console.log(event);
        });
    }

    /**
     * overlay 在整个屏幕位置，自己控制位置
     */
    showOverlayGlobalPanelPosition() {
        const config = new OverlayConfig();
        config.positionStrategy = this.overlay.position()
            .global()
            .left(`${this.globalOverlayPosition}px`)
            .top(`${this.globalOverlayPosition}px`);
        this.globalOverlayPosition += 30;
        config.hasBackdrop = true;
        const overlayRef = this.overlay.create(config);
        overlayRef.backdropClick().subscribe(() => {
            overlayRef.dispose();
        });
        overlayRef.attach(new ComponentPortal(OverlayPanelComponent, this.viewContainerRef));
    }

    /**
     * 显示 ng-template 的内容
     */
    showOverlayPanelTemplate() {
        const config = new OverlayConfig();
        config.positionStrategy = this.overlay.position()
            .global()
            .centerHorizontally()
            .top(`${this.globalOverlayPosition}px`);
        this.globalOverlayPosition += 30;
        this._overlayTemplateRef = this.overlay.create(config);
        this._overlayTemplateRef.attach(this.templateGlobalPortals);
    }

    /**
     * 移除 ng-template 内容
     */
    dismissOverlayPanelTemplate() {
        if (this._overlayTemplateRef && this._overlayTemplateRef.hasAttached()) {
            this._overlayTemplateRef.dispose();
        }
    }

    /**
     * overlay connect origin 显示，依附某个组件显示
     */
    showOverlayPanelConnectComponent() {
        const strategy = this.overlay.position()
            .flexibleConnectedTo(this._overlayConnectComponentOrigin.nativeElement)
            .withPositions([{
                originX: 'center',
                originY: 'bottom',
                overlayX: 'center',
                overlayY: 'top',
                offsetX: 0,
                offsetY: 0
            }]);
        strategy.withLockedPosition(true);
        const config = new OverlayConfig({positionStrategy: strategy});
        config.scrollStrategy = this.overlay.scrollStrategies.reposition();
        this._overlayConnectRef = this.overlay.create(config);
        this._overlayConnectRef.attach(new ComponentPortal(OverlayPanelComponent, this.viewContainerRef));
    }

    dismissOverlayPanelConnectComponent() {
        if (this._overlayConnectRef && this._overlayConnectRef.hasAttached()) {
            this._overlayConnectRef.dispose();
        }
    }

    /**
     * overlay connect origin 显示，依附ng-template
     */
    showOverlayPanelConnectTemplate() {
        const strategy = this.overlay.position()
            .flexibleConnectedTo(this._overlayConnectTemplateOrigin.nativeElement)
            .withPositions([{
                originX: 'start',
                originY: 'bottom',
                overlayX: 'end',
                overlayY: 'top',
                offsetX: 0,
                offsetY: 0
            }]);
        const config = new OverlayConfig({positionStrategy: strategy});
        config.hasBackdrop = true;
        config.backdropClass = 'backdrop-with-out';
        const overlayRef = this.overlay.create(config);
        overlayRef.backdropClick().subscribe(() => {
            overlayRef.dispose();
        });
        overlayRef.attach(this._overlayOriginTemplateDirective);
    }
}
