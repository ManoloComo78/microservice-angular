import {DynamicOptionInterface} from "./dynamic-option.interface";

export interface DynamicSelectInterface {
  title: string;
  typeName: string;
  options: DynamicOptionInterface[];
}
