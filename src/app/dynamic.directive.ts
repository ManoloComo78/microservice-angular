import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[adHost]',
})
export class DynamicDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

