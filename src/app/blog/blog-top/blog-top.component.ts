// angular
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

import { NgRedux, select } from '@angular-redux/store';
import { IBlogState } from '../blog.reducer';
import { BlogActions } from '../blog.actions';

import { BlogDialogComponent } from '../blog-dialog/blog-dialog.component';

// shared
import { PostModel } from '../../+shared/models/post.model';

// libs
import { MatDialog } from '@angular/material';
import * as format from 'date-fns/format';

@Component({
  templateUrl: './blog-top.component.html',
  styleUrls: ['./blog-top.component.scss'],
})
export class BlogTopComponent implements OnInit {
  @select(['blog', 'posts']) readonly posts$: Observable<any>;

  public postsSub: Subscription;
  public page: number = 1;

  constructor(
    private ngRedux: NgRedux<IBlogState>,
    private actions: BlogActions,
    private dialog: MatDialog,
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

  openDialog(post: PostModel): void {
    this.dialog.open(BlogDialogComponent, {
      panelClass: 'rs-full-screen-dialog',
      data: { post },
    });
  }
}
