import { Injectable, Inject, Component, ElementRef, Host, Input } from '@angular/core';

// libs
import Swiper from 'swiper';

@Injectable()
@Component({
  selector: 'swiper-container',
  template:
  `<div class="swiper-container">
    <div class="swiper-wrapper">
      <ng-content></ng-content>
    </div>
    <div class="swiper-pagination"></div>
  </div>`
})
export class SwiperContainer {
  @Input() public pager: any;
  @Input() public options: any;

  public swiper: any;
  public showPager: boolean;

  /**
   * Creates an instance of SwiperContainer.
   * @param {ElementRef} elementRef 
   * @memberof SwiperContainer
   */
  constructor( @Inject(ElementRef) private elementRef: ElementRef) {
  }

  /**
   * 
   * 
   * @memberof SwiperContainer
   */
  public ngOnInit() {
    let options = this.setDefaultOptions({
    }, this.options);

    const nativeElement = this.elementRef.nativeElement;
    this.swiper = new Swiper(nativeElement.children[0], this.options);
  }

  /**
   * 
   * 
   * @memberof SwiperContainer
   */
  public update() {
    setTimeout(() => {
      this.swiper.update()
    });
  }

  /**
   * 
   * 
   * @private
   * @param {*} dest 
   * @param {...any[]} args 
   * @returns 
   * @memberof SwiperContainer
   */
  private setDefaultOptions(dest: any, ...args: any[]) {
    for (let i = arguments.length - 1; i >= 1; i--) {
      let source = arguments[i] || {};
      for (let key in source) {
        if (source.hasOwnProperty(key) && !dest.hasOwnProperty(key)) {
          dest[key] = source[key];
        }
      }
    }
    return dest;
  }
}

@Injectable()
@Component({
  selector: 'swiper-slide',
  template: '<div><ng-content></ng-content></div>',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperSlide {
  private ele: HTMLElement;

  /**
   * Creates an instance of SwiperSlide.
   * @param {ElementRef} elementRef 
   * @param {SwiperContainer} swiper 
   * @memberof SwiperSlide
   */
  constructor(
    @Inject(ElementRef) elementRef: ElementRef,
    @Host() @Inject(SwiperContainer) swiper: SwiperContainer
  ) {
    this.ele = elementRef.nativeElement;
    this.ele.classList.add('swiper-slide');

    swiper.update();
  }
}
