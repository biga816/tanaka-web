import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

import { select } from '@angular-redux/store';

// shared
import { SwiperContainer } from '../+shared/components/swiper/swiper.component';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent {
  @ViewChild('topSwiper') public topSwiper: SwiperContainer;
  @select(['app', 'sidenav']) readonly sidenav$: Observable<any>;

  public sidenavSub: Subscription;
  public swipeOptions = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets'
    },
  };
  public isOpen: boolean = false;

  /**
   * Creates an instance of HomeComponent.
   * @memberof HomeComponent
   */
  constructor() {
  }

  /**
   * 
   * 
   * @memberof HomeComponent
   */
  ngAfterViewInit() {
    this.sidenavSub = this.sidenav$.subscribe((sidenav: boolean) => {
      this.topSwiper.swiper.slideTo(0);
      this.isOpen = sidenav;
      this.topSwiper.update();
    });
  }

  /**
   * 
   * 
   * @memberof HomeComponent
   */
  ngOnDestroy(): void {
    this.sidenavSub.unsubscribe();
  }
}