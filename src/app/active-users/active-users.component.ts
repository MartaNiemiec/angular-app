import { Component, OnInit } from '@angular/core';
import { UsersService } from '../usersService.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
    // @Input() users: string[];
    // @Output() userSetToInactive = new EventEmitter<number>();
  users: string[];

  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.users = this.userService.activeUsers;
  }

  // onSetToInactive(id: number) {
  //   this.userSetToInactive.emit(id);
  // }

  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
  }
}
