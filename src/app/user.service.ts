import { Injectable } from '@angular/core';
import {ModelSelect} from "./model-select";
import {DynamicSelectComponent} from "./dynamic-select/dynamic-select.component";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getSelects() {
    return [
      new ModelSelect(
        DynamicSelectComponent,
        { name: 'Bombasto', bio: 'Brave as they come' }
      ),
      new ModelSelect(
        DynamicSelectComponent,
        { name: 'Dr. IQ', bio: 'Smart as they come' }
      ),
      new ModelSelect(
        DynamicSelectComponent,
        { headline: 'Hiring for several positions', body: 'Submit your resume today!' }
      ),
      new ModelSelect(
        DynamicSelectComponent,
        { headline: 'Openings in all departments', body: 'Apply today' }
      )
    ];
  }
}
