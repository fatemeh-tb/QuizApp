import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCorect]'
})
export class BackgroundDirective implements OnInit {
  @Input() correctAnswer: boolean = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    if (this.correctAnswer) {
      this.renderer.setStyle(this.elRef.nativeElement, 'font-weight', 'bolder');
    }
  }
}
