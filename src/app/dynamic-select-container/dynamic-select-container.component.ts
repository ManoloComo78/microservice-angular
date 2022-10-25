import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ModelSelect} from "../model-select";
import {DynamicDirective} from "../dynamic.directive";
import {DynamicComponent} from "../dynamic.component";

@Component({
  selector: 'app-dynamic-select-container',
  templateUrl: './dynamic-select-container.component.html',
  styleUrls: ['./dynamic-select-container.component.scss']
})
export class DynamicSelectContainerComponent implements OnInit {

  @Input() selects: ModelSelect[] = [];

  @ViewChild(DynamicDirective, {static: true}) adHost!: DynamicDirective;

  constructor() { }

  ngOnInit(): void {
    this.loadComponent(1);
  }

  loadComponent(index: number) {
    const modelSelect = this.selects[index];

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<DynamicComponent>(modelSelect.component);
    componentRef.instance.data = modelSelect.data;
  }
}
