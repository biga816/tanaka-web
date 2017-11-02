import { Directive, Renderer, HostListener, ElementRef } from "@angular/core";

import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../app.reducer';
import { AppActions } from '../../app.actions';

@Directive({
	selector: "[scroll]" // Attribute selector
})
export class ScrollDirective {
	/**
   * 
   * 
   * @param {any} $event 
   * @memberof ScrollDirective
   */
  @HostListener('window:scroll', ['$event'])
	onWindowScroll($event) {
		this.adjustFooter($event);
  }

  /**
   * 
   * 
   * @param {any} $event 
   * @memberof ScrollDirective
   */
  @HostListener('click', ['$event'])
	onClick($event) {
		this.showFooter();
  }

  preScrollTop: number = 0;

	/**
   * Creates an instance of ScrollDirective.
   * @param {Renderer} renderer 
   * @param {ElementRef} element 
   * @param {NgRedux<IAppState>} ngRedux 
   * @param {AppActions} actions 
   * @memberof ScrollDirective
   */
  constructor(
    private renderer: Renderer,
    private element: ElementRef,
    private ngRedux: NgRedux<IAppState>,
    private actions: AppActions,
  ) {
	}

	/**
   * 
   * 
   * @private
   * @param {any} event 
   * @memberof ScrollDirective
   */
  private adjustFooter(event): void {
    const distance = window.pageYOffset - this.preScrollTop;
    
    if (distance <= -10) {
      this.ngRedux.dispatch(this.actions.showFooter());
    } else if (distance >= 25) {
      this.ngRedux.dispatch(this.actions.hideFooter());
    }
    this.preScrollTop = window.pageYOffset;
  }

  private showFooter() {
    this.ngRedux.dispatch(this.actions.showFooter());
  }
  
}