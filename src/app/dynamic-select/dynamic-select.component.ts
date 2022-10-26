import {Component, Input, OnInit} from '@angular/core';
import {DynamicSelectInterface} from "./dynamic-select.interface";
import {DynamicOptionInterface} from "./dynamic-option.interface";

@Component({
  selector: 'app-dynamic-select',
  templateUrl: './dynamic-select.component.html',
  styleUrls: ['./dynamic-select.component.scss']
})
export class DynamicSelectComponent implements OnInit, DynamicSelectInterface {
  selectedElement: string = "none";

  constructor() { }

  ngOnInit(): void {

  }

  @Input() title: string = "";
  @Input() typeName: string = "";
  @Input() options: DynamicOptionInterface[] = [];

}
