import {Directive, ElementRef, HostBinding} from "@angular/core";

@Directive({
    selector: '[foxTexture]'
})
export class FoxTextureDirective {
    constructor(private element: ElementRef) {
        console.log(element);
    }

    @HostBinding('class.texture') textureClass = {
        background: 'rgba(255, 255, 255, 0.3)',
        'backdrop-filter': 'blur(20px)'
    };
}
