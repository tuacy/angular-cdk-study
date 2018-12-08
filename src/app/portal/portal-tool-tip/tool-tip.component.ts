import {Component, TemplateRef, ViewChild} from '@angular/core';

@Component({
    template: `
        <ng-template #tooltip let-tooltipText>
            <span class="tooltip">{{ tooltipText }}</span>
        </ng-template>`,
    styles: [
            `
            .tooltip {
                position: absolute;
                color: red;
                top: 20px;
                left: 20px;
            }
        `
    ]
})
export class ToolTipComponent {
    @ViewChild('tooltip') tooltip: TemplateRef<any>;
}
