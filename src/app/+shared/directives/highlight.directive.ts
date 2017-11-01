import { Directive, ElementRef, AfterViewInit } from '@angular/core';
import * as hljs from 'highlight.js';

@Directive({
    selector: '[highlight]'
})
export class HighlightDirective implements AfterViewInit{
    constructor(private eltRef:ElementRef) {
    }

    ngAfterViewInit() {
      hljs.initHighlighting.called = false;
      hljs.initHighlighting();
    }
}