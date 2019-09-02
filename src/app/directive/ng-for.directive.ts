import { Directive, ViewContainerRef, TemplateRef, OnInit, OnChanges, Input } from '@angular/core';

@Directive({
  selector: '[appNgFor]'
})
export class NgForDirective implements OnInit, OnChanges {

  @Input() appNgForOf: Array<any>;

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) { }

  ngOnInit() {

  }

  ngOnChanges() {
    for (const input of this.appNgForOf) {
      this.container.createEmbeddedView(this.template,
        {
          $implicit: input,
          index: this.appNgForOf.indexOf(input),
          first: this.appNgForOf[0],
          last: this.appNgForOf[this.appNgForOf.length - 1]
        }
      );
    }
  }

}
