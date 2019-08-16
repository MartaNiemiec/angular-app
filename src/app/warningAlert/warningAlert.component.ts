import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-warningAlert',
    template: `<h1>Warning Alert</h1>`,
    styles: [
        `h1 {
            background-color: rgb(245, 200, 200);
            color: white;
            padding: 20px;
            border: 1px solid red;
        }`]
})

export class WarningAlert implements OnInit {
    constructor() { }

    ngOnInit() { }
}