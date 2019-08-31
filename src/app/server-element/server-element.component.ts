import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {type: string, name: string, content: string};  // 'srvElement' alias, now binding through the srvElement alias to bind to 'element' outside of this component

  constructor() { }

  ngOnInit() {
  }

}
