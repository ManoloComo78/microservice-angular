import { Component, OnInit } from '@angular/core';

interface User {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dynamiccombobox',
  templateUrl: './dynamiccombobox.component.html',
  styleUrls: ['./dynamiccombobox.component.scss']
})
export class DynamiccomboboxComponent implements OnInit {
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

}
