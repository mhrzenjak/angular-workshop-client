import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
    selector: "img[rotateOnHover]"
})
export class RotateOnHoverDirective{

    constructor(
        private renderer: Renderer2,
        private el: ElementRef
    ){}

    @HostListener("mouseenter") onMouseEnter() {
        this.hover(true);
        console.log("true");
    }

    @HostListener("mouseleave") onMouseLeave() {
        this.hover(false);
    }

    hover(shouldRotate: boolean){
        if(shouldRotate){
            this.renderer.addClass(this.el.nativeElement, "spin");
        } 
        else {
            this.renderer.removeClass(this.el.nativeElement, "spin");
        }
    }
}