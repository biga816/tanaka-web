// angular
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

import { NgRedux, select } from '@angular-redux/store';
import { IBlogState } from './blog.reducer';
import { BlogActions } from './blog.actions';

// shared
import { PostModel } from '../+shared/models/post.model';

// libs
import * as format from 'date-fns/format';

@Component({
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  @select(['blog', 'posts']) readonly posts$: Observable<any>;

  public postsSub: Subscription;
  public page: number = 1;

  constructor(
    private ngRedux: NgRedux<IBlogState>,
    private actions: BlogActions
  ) { }

  ngOnInit() {
    this.page = 1;
    // this.scroll.enable(true);
    this.ngRedux.dispatch(this.actions.featchPosts(this.page, true));

    this.postsSub = this.posts$.subscribe((posts: PostModel[]) => {
      // this.scroll.complete();
      // if (this.page >= 2 && this.page * API.SETTING.PER > stories.length) {
      //   this.scroll.enable(false);
      // }
    });
  }

  getDateFormat(date) {
    return format(date, 'YYYY/MM/DD');
  }

}
