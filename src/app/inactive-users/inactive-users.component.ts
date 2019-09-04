import { Component, OnInit } from '@angular/core';
import { UsersService } from '../usersService.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  // @Input() users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();
  users: string[];

  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.users = this.userService.inactiveUsers;
  }

  // onSetToActive(id: number) {
  //   this.userSetToActive.emit(id);
  // }

  onSetToActive(id: number) {
    this.userService.setToActive(id);
  }
}
