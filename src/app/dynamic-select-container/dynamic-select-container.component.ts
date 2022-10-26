import {Component, Input, OnInit} from '@angular/core';
import {UsersSelectModel} from "../user/users-select-model";
import {UserService} from "../user/user.service";

@Component({
  selector: 'app-dynamic-select-container',
  templateUrl: './dynamic-select-container.component.html',
  styleUrls: ['./dynamic-select-container.component.scss']
})
export class DynamicSelectContainerComponent implements OnInit {

  @Input() selects: UsersSelectModel[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.selects = this.userService.getSelects();
  }
}
