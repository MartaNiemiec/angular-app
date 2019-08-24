import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assigment',
  templateUrl: './assigment.component.html',
  styleUrls: ['./assigment.component.css']
})
export class AssigmentComponent implements OnInit {
  username = '';

  constructor() { }

  ngOnInit() {
  }

  resetInput(event: Event) {
    this.username = '';
  }

}
