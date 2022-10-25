import {Component, Input, OnInit} from '@angular/core';
import {DynamicComponent} from "../dynamic.component";

interface User {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dynamic-select',
  templateUrl: './dynamic-select.component.html',
  styleUrls: ['./dynamic-select.component.scss']
})
export class DynamicSelectComponent implements OnInit, DynamicComponent {
  selectedUser: string = "none";
  numberList: number | undefined; //TODO

  users: User[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

  @Input() data: any;

}
