import {Injectable} from '@angular/core';
import {UsersSelectModel} from "./users-select-model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
  }

  getSelects() {
    return [
      new UsersSelectModel(
        'Italy 1',
        'user',
        [
          {value: 'steak-0', viewValue: 'Steak'},
          {value: 'pizza-1', viewValue: 'Pizza'},
          {value: 'tacos-2', viewValue: 'Tacos'},
        ]
      ),
      new UsersSelectModel(
        'Dutch 2',
        'user', [
          {value: 'steak-0', viewValue: 'a'},
          {value: 'pizza-1', viewValue: 'b'},
          {value: 'tacos-2', viewValue: 'c'},
        ]
      ),
      new UsersSelectModel(
        'Germany 12',
        'user', [
          {value: 'steak-0', viewValue: '0'},
          {value: 'pizza-1', viewValue: '1'},
          {value: 'tacos-2', viewValue: '2'},
        ]
      ),
      new UsersSelectModel(
        'Sweden 22',
        'user', [
          {value: 'steak-0', viewValue: '0'},
          {value: 'pizza-1', viewValue: '1'},
          {value: 'tacos-2', viewValue: '2'},
        ]
      ),
    ];
  }
}
