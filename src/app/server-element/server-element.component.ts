import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated  //  None, Native, Emulated is set by default
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {type: string, name: string, content: string};  // 'srvElement' alias, now binding through the srvElement alias to bind to 'element' outside of this component

  constructor() { }

  ngOnInit() {
  }

}
