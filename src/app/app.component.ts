import { Component, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';
import { MediaChange, ObservableMedia } from "@angular/flex-layout";

import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from './app.reducer';
import { AppActions } from './app.actions';

// libs
import { MatSidenav } from '@angular/material';

// import fade in animation
import { routerTransition } from './+shared/animations/page-transition';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ routerTransition ]
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  @select(['app', 'footer']) readonly footer$: Observable<any>;
  @select(['app', 'sidenav']) readonly sidenav$: Observable<any>;

  public watcher: Subscription;
  public routerEventSub: Subscription;
  public sidenavSub: Subscription;

  public activeMediaQuery: any = "";
  public isHome: boolean = true;
  public isOpen: boolean = false;
  public currentUrl: string;
  public copyright: string = "©️2017-"+ new Date().getFullYear() + " Akihiro Tanaka";

  /**
   * Creates an instance of AppComponent.
   * @param {ObservableMedia} media 
   * @param {Router} router 
   * @param {NgRedux<IAppState>} ngRedux 
   * @param {AppActions} actions 
   * @memberof AppComponent
   */
  constructor(
    private media: ObservableMedia,
    private router: Router,
    private ngRedux: NgRedux<IAppState>,
    private actions: AppActions
  ) {
    // check url
    this.routerEventSub = this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.currentUrl = "";
        const currentUrl = e.url.slice(1);

        this.isHome = (currentUrl === 'home' || currentUrl === '');
        this.currentUrl = currentUrl;
      }
    });

    this.sidenavSub = this.sidenav$.subscribe((sidenav: boolean) => {
      this.isOpen = sidenav;
    });

  }

  /**
   * 
   * 
   * @memberof AppComponent
   */
  ngOnInit():void {
    let self = this;

    this.sidenav.onOpen.subscribe(() => {
      this.ngRedux.dispatch(this.actions.openSidenav());
    });
    this.sidenav.onClose.subscribe(() => {
      this.ngRedux.dispatch(this.actions.closeSidenav());
    });

    this.watcher = this.media.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : "";
      if ( change.mqAlias == 'lg' || change.mqAlias == 'md') {
        setTimeout(() => self.sidenav.open(), 500);
      } else {
        setTimeout(() => self.sidenav.close(), 100);
      }
    });
  }

  ngOnDestroy(): void {
    this.routerEventSub.unsubscribe();
    this.sidenavSub.unsubscribe();
    this.watcher.unsubscribe();
  }

  /**
   * 
   * 
   * @param {*} outlet 
   * @returns {*} 
   * @memberof AppComponent
   */
  getState(outlet: any): any {
    return outlet ? outlet.activatedRouteData.state : null;
  }

  /**
   * 
   * 
   * @param {*} event 
   * @memberof AppComponent
   */
  swipeUp(event: any):void {
    this.ngRedux.dispatch(this.actions.showFooter());
  }

  toggelSidnav(isOpen: boolean) {
    this.sidenav.toggle();
  }
}
