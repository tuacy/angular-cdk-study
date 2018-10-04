import {AfterViewInit, Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {FocusMonitor, FocusTrapFactory, ListKeyManager} from '@angular/cdk/a11y';

@Component({
    selector: 'app-cdk-accessibility',
    templateUrl: './cdk-accessibility.component.html',
    styleUrls: ['./cdk-accessibility.component.less']
})
export class CdkAccessibilityComponent implements AfterViewInit {

    keyManager: any;
    @ViewChild('element') element: ElementRef;
    @ViewChildren('elementChild') elementChild: QueryList<any>;

    constructor(private focusTrap: FocusTrapFactory,
                private focusMonitor: FocusMonitor) {
    }

    ngAfterViewInit() {
        // 初始化ListKeyManager
        this.keyManager = new ListKeyManager(this.elementChild);
        this.keyManager.withHorizontalOrientation('ltr'); // Arrow navigation options
        this.keyManager.withWrap();  // Arrow navigation options


        // 监听Active状态对应的item
        this.keyManager.change.subscribe(item => {
            console.log(item);
        });

        // 监听Active状态对应的item
        this.keyManager.tabOut.subscribe(item => {
            console.log('tabOut');
        });
    }

    /* 监听键盘事件 */
    @HostListener('window:keyup', ['$event'])
    keyFunc(event) {
        if (event.code !== 'Tab') {
            this.keyManager.onKeydown(event);
            this.focusMonitor.focusVia(this.keyManager.activeItem.nativeElement, 'keyboard');
        }
    }

    /* Shows the form, puts focus on it and initialize keyboard navigation */
    testA11y() {
        this.element.nativeElement.hidden = false;
        const focusTrap = this.focusTrap.create(this.element.nativeElement);  // creates a focus trap region
        focusTrap.focusInitialElement();    // Moves the focus in the form (by default the first field)
        this.keyManager.setFirstItemActive();    // Sets the element we focused on as 'active' to the KeyManager
    }
}


