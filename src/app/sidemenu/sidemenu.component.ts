import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

interface Element {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  comboBoxNumbers: Element[] = [
    {value: 1, viewValue: '1'},
    {value: 5, viewValue: '5'},
    {value: 10, viewValue: '10'},
    {value: 100, viewValue: '100'},
    {value: 1000, viewValue: '1000'},
  ];

  elementNumbers: Element[] = [
    {value: 1, viewValue: '1'},
    {value: 3, viewValue: '3'},
    {value: 5, viewValue: '5'},
    {value: 10, viewValue: '10'},
    {value: 100, viewValue: '100'},
    {value: 1000, viewValue: '1000'},
  ];

  callTypes: Element[] = [
    {value: 1, viewValue: 'Step by step'},
    {value: 2, viewValue: 'All'}
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      comboBoxNumber: [5],
      elementNumber: [3],
      callType: [1]
    });
  }

  saveDetails(form: any) {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(form.value, null, 4));
  }

}