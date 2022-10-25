import {Component, OnInit} from '@angular/core';
import {ModelSelect} from "./model-select";
import {UserService} from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'microservice-angular';

  selects: ModelSelect[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.selects = this.userService.getSelects();
  }
}
