import { Directive, Renderer, HostListener, ElementRef } from "@angular/core";

import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../app.reducer';
import { AppActions } from '../../app.actions';

@Directive({
	selector: "[scroll]" // Attribute selector
})
export class ScrollDirective {
	@HostListener('window:scroll', ['$event'])
	onWindowScroll($event) {
		this.adjustFooter($event);
  }

  @HostListener('click', ['$event'])
	onClick($event) {
		this.showFooter();
  }

  preScrollTop: number = 0;

	constructor(
    private renderer: Renderer,
    private element: ElementRef,
    private ngRedux: NgRedux<IAppState>,
    private actions: AppActions,
  ) {
	}

	private adjustFooter(event): void {
    const distance = window.pageYOffset - this.preScrollTop;
    
    if (distance <= -15) {
      this.ngRedux.dispatch(this.actions.showFooter());
    } else if (distance >= 15) {
      this.ngRedux.dispatch(this.actions.hideFooter());
    }
    this.preScrollTop = window.pageYOffset;
  }

  private showFooter() {
    this.ngRedux.dispatch(this.actions.showFooter());
  }
  
}