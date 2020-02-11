import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCopy]'
})
export class CopyDirective {

  element: ElementRef;
  coppiedValue: string;
  constructor(private _element: ElementRef) { 
    this.element = _element;
  }
  
  
  @HostListener('dblclick') copyToClipboard() {
    this.element.nativeElement.style.userSelect = "all";
    document.execCommand('copy');
    this.element.nativeElement.nextSibling.innerText = `${this.element.nativeElement.textContent} Coppied to Clipboard!`  
    this.element.nativeElement.nextSibling.className = "text-success"      
  }


  @HostListener('mouseover') showToolTip() {
    this.element.nativeElement.title = `Copy ${this.element.nativeElement.textContent} to Clipboard`;
  }
 
  

}
