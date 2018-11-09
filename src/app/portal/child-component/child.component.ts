import {Component} from '@angular/core';

@Component({
    selector: 'app-portal-child',
    template: `<h1>abc</h1>`
})
export class ChildComponent {

    title = 'Hello World';

    constructor() {
        setTimeout(_ => {
            this.title = 'Updated!';
        }, 5000);
    }

}
