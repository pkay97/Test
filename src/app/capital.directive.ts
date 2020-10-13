import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCapital]'
})
export class CapitalDirective implements OnInit {

  constructor(private el: ElementRef) {}

   ngOnInit() {
    this.el.nativeElement.style.textTransform = 'uppercase';
  }

}
