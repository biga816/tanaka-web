import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'scroll',
  template: `
    <ng-content></ng-content>
    <div [hidden]="!isCalling"><mat-spinner></mat-spinner></div>
  `,
  styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent {
  @Input() scrollPercent: number = 200;
  @Input() scrollCompleteCallback: Function;

  @Output() setScroll = new EventEmitter();

  public isCalling: boolean =  false;
  public isEnable: boolean = true;

  @HostListener('window:scroll', ['$event']) onScroll($event: any): void {
    const isScrolled = $event.target.body.clientHeight - window.innerHeight - window.pageYOffset < this.scrollPercent;

    if (!this.isCalling && this.isEnable && isScrolled) {
      this.isCalling = true;
      this.setScroll.emit();
    }

  }

  constructor(private el: ElementRef) { }

  complete(): void {
    this.isCalling = false;
  }

  enable(isEnable: boolean): void {
    this.isEnable = isEnable;
  }
}
