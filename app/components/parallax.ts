import {Directive, ElementRef, AfterViewInit} from '@angular/core';

declare var $:any;

@Directive({
  selector: '[parallax]'
})
export class Parallax implements AfterViewInit{

  constructor(private el:ElementRef) {}

  ngAfterViewInit(){

    $(this.el.nativeElement).addClass('parallax').parallax();


  }

}
