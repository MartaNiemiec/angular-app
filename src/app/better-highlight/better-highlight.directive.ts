import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';
import { NgModuleResolver } from '@angular/compiler';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue')
  }

  @HostListener('mouseenter') mouseover(eventDate: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue')
  }

  @HostListener('mouseleave') mouseleave(eventDate: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent')
  }

}
