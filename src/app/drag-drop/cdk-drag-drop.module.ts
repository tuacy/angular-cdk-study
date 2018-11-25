import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CdkDragDropComponent} from './cdk-drag-drop.component';
import {CdkDragDropRoutingModule} from './cdk-drag-drop-routing.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {RouterModule} from '@angular/router';
import {DragDropDropListComponent} from './drop-list-directive/drag-drop-drop-list.component';
import {DragDropDropComponent} from './drop-directive/drag-drop-drop.component';
import {DragDropTransferringItemComponent} from './transferring-item/drag-drop-transferring-item.component';
import {DragDropHandleDragAreaComponent} from './handle-drag-area/drag-drop-handle-drag-area.component';
import {DragDropCustomizingDragPreviewComponent} from './customizing-drag-preview/drag-drop-customizing-drag-preview.component';
import {DragDropCustomizingDragPlaceHolderComponent} from './customizing-drag-place-holder/drag-drop-customizing-drag-place-holder.component';
import {DragDropOrientationDragComponent} from './orientation-drag/drag-drop-orientation-drag.component';
import {DragDropRestrictingMoveAreaComponent} from './restricting-move-area/drag-drop-restricting-move-area.component';
import {DragDropDragDialogComponent} from './drag-dialog/drag-drop-drag-dialog.component';
import { DragDropControllingWithItemComponent } from './controlling-with-item/drag-drop-controlling-with-item.component';
import { DragDropDisableDragComponent } from './disable-drag/drag-drop-disable-drag.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        DragDropModule,
        CdkDragDropRoutingModule
    ],
    declarations: [
        CdkDragDropComponent,
        DragDropDropListComponent,
        DragDropDropComponent,
        DragDropTransferringItemComponent,
        DragDropHandleDragAreaComponent,
        DragDropCustomizingDragPreviewComponent,
        DragDropCustomizingDragPlaceHolderComponent,
        DragDropOrientationDragComponent,
        DragDropRestrictingMoveAreaComponent,
        DragDropDragDialogComponent,
        DragDropControllingWithItemComponent,
        DragDropDisableDragComponent
    ]
})
export class CdkDragDropModule {
}
