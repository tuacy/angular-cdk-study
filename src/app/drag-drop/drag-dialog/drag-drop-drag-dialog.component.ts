import {AfterViewInit, Component, OnDestroy, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {Overlay, OverlayRef} from '@angular/cdk/overlay';
import {TemplatePortal} from '@angular/cdk/portal';

@Component({
  selector: 'app-drag-drop-drag-dialog',
  templateUrl: './drag-drop-drag-dialog.component.html',
  styleUrls: ['./drag-drop-drag-dialog.component.less']
})
export class DragDropDragDialogComponent  implements AfterViewInit, OnDestroy {
    @ViewChild(TemplateRef) _dialogTemplate: TemplateRef<any>;
    private _overlayRef: OverlayRef;
    private _portal: TemplatePortal;

    constructor(private _overlay: Overlay, private _viewContainerRef: ViewContainerRef) {}

    ngAfterViewInit() {
        this._portal = new TemplatePortal(this._dialogTemplate, this._viewContainerRef);
        this._overlayRef = this._overlay.create({
            positionStrategy: this._overlay.position().global().centerHorizontally().centerVertically(),
            hasBackdrop: true
        });
        this._overlayRef.backdropClick().subscribe(() => this._overlayRef.detach());
    }

    ngOnDestroy() {
        this._overlayRef.dispose();
    }

    openDialog() {
        this._overlayRef.attach(this._portal);
    }

}
