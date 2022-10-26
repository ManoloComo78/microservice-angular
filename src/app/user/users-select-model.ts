import {DynamicOptionInterface} from "../dynamic-select/dynamic-option.interface";

export class UsersSelectModel {
  constructor(public title: string, public typeName: string, public options: DynamicOptionInterface[]) {
  }
}
