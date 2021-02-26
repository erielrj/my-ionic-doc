import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[menuItemGroup]'
})
export class MenuItemGroupDirective {

  constructor(private el: ElementRef) {

    setTimeout(() => {

      this.el.nativeElement.childNodes[1].setAttribute('name', 'arrow-down')
      this.el.nativeElement.childNodes[1].setAttribute('slot', 'end')
    
    }, 0);

  }

  @Input() menuItemGroup: string;
  
  @HostListener('click') onMouseEnter() {
    this.changeColor();
  }

  changeColor(){
    if(this.menuItemGroup){
      this.el.nativeElement.setAttribute('color', '');

      this.el.nativeElement.childNodes[1].setAttribute('color', '');
      this.el.nativeElement.childNodes[1].setAttribute('name', 'arrow-down')
      
    } else {
      this.el.nativeElement.setAttribute('color', 'primary');      
      this.el.nativeElement.childNodes[1].setAttribute('color', 'light');
      this.el.nativeElement.childNodes[1].setAttribute('name', 'arrow-up')
    }
  }


}
