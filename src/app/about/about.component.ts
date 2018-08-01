import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

// redux
import { NgRedux, select } from '@angular-redux/store';
import { IAboutState } from './about.reducer';
import { AboutActions } from './about.actions';

// shared
import { URLS } from '../+shared/utils/const';
import { UserModel } from '../+shared/models/user.model';
import { listAnimation } from '../+shared/animations/page-transition';

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [listAnimation]
})
export class AboutComponent {
  @select(['about', 'user']) readonly user$: Observable<any>;

  facebookUrl: string = URLS.FACEBOOK;
  instagramUrl: string = URLS.INSTAGRAM;
  githubUrl: string = URLS.GITHUB;
  preScrollTop: number = 0;
  user: UserModel;

  userSub: Subscription;

  /**
   * Creates an instance of AboutComponent.
   * @param {Router} router 
   * @memberof AboutComponent
   */
  constructor(
    private ngRedux: NgRedux<IAboutState>,
    private actions: AboutActions,
  ) { }

  /**
   *
   *
   * @memberof AboutComponent
   */
  ngOnInit() {
    this.ngRedux.dispatch(this.actions.featchUser(1));

    this.userSub = this.user$.subscribe((user: UserModel) => {
      this.user = user;
    })
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  /**
   * 
   * 
   * @param {string} url 
   * @memberof AboutComponent
   */
  openLink(url: string): void {
    setTimeout(() => {
      window.open(url);
    }, 300);
  }
}