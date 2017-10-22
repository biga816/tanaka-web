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

  watcher: Subscription;
  routerEventSub: Subscription;
  activeMediaQuery: any = "";
  isOpen: boolean = false;
  isHome: boolean = true;
  currentUrl: string;

  constructor(
    private media: ObservableMedia ,
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
        setTimeout(() => {
          this.currentUrl = currentUrl;
        }, 300);
      }
    });

  }

  ngOnInit() {
    let self = this;

    this.sidenav.onOpen.subscribe(() => {
      this.isOpen = true;
    });
    this.sidenav.onClose.subscribe(() => {
      this.isOpen = false;
    });

    this.watcher = this.media.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : "";
      if ( change.mqAlias == 'lg' || change.mqAlias == 'md') {
        setTimeout(() => self.sidenav.open(), 300);
      } else {
        setTimeout(() => self.sidenav.close(), 300);
      }
    });
  }

  getState(outlet: any): void {
    return outlet ? outlet.activatedRouteData.state : null;
  }

  swipeUp(event: any) {
    console.log(event);
    this.ngRedux.dispatch(this.actions.showFooter());
  }
}
