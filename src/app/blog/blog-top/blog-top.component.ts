// angular
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

import { NgRedux, select } from '@angular-redux/store';
import { IBlogState } from '../blog.reducer';
import { BlogActions } from '../blog.actions';

import { BlogDialogComponent } from '../blog-dialog/blog-dialog.component';

// shared
import { PostModel } from '../../+shared/models/post.model';
import { listAnimation } from '../../+shared/animations/page-transition';

// libs
import { MatDialog } from '@angular/material';
import * as format from 'date-fns/format';

@Component({
  templateUrl: './blog-top.component.html',
  styleUrls: ['./blog-top.component.scss'],
  animations: [listAnimation]
})
export class BlogTopComponent implements OnInit {
  @select(['blog', 'posts']) readonly posts$: Observable<any>;

  public posts: PostModel[];
  public postsSub: Subscription;
  public page: number = 1;
  public dummies: any[] = [ 1, 2, 3 ];

  constructor(
    private ngRedux: NgRedux<IBlogState>,
    private actions: BlogActions,
    private dialog: MatDialog,
  ) {
    this.posts = [];
  }

  ngOnInit() {
    this.page = 1;
    // this.scroll.enable(true);

    this.postsSub = this.posts$.subscribe((posts: PostModel[]) => {
      if (!posts || posts.length == 0) {
        this.ngRedux.dispatch(this.actions.featchPosts(this.page, true));
      }

      setTimeout(() => {
        this.posts = posts;
      }, 100);
      // this.scroll.complete();
      // if (this.page >= 2 && this.page * API.SETTING.PER > stories.length) {
      //   this.scroll.enable(false);
      // }
    });
  }

  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
  }

  getDateFormat(date: string): string {
    return format(date, 'YYYY/MM/DD');
  }

  openDialog(post: PostModel): void {
    this.dialog.open(BlogDialogComponent, {
      panelClass: 'rs-full-screen-dialog',
      data: { post },
    });
  }
}
