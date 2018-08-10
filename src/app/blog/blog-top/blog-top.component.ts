// angular
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

// redux
import { NgRedux, select } from '@angular-redux/store';
import { IBlogState } from '../blog.reducer';
import { BlogActions } from '../blog.actions';

import { BlogDialogComponent } from '../blog-dialog/blog-dialog.component';

// shared
import { PostModel } from '../../+shared/models/post.model';
import { listAnimation } from '../../+shared/animations/page-transition';
import { API } from '../../+shared/utils/const';
import { ScrollComponent } from '../../+shared/components/scroll/scroll.component';

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
  @select(['blog', 'totalPage']) readonly totalPage$: Observable<any>;
  @ViewChild(ScrollComponent) scroll: ScrollComponent;

  public posts: PostModel[];
  public postsSub: Subscription;
  public totalPageSub: Subscription;
  public page: number = 1;
  public totalPage: number = 0;
  public dummies: any[] = [ 1, 2, 3 ];

  /**
   * Creates an instance of BlogTopComponent.
   * @param {NgRedux<IBlogState>} ngRedux 
   * @param {BlogActions} actions 
   * @param {MatDialog} dialog 
   * @memberof BlogTopComponent
   */
  constructor(
    private ngRedux: NgRedux<IBlogState>,
    private actions: BlogActions,
    private dialog: MatDialog,
  ) {
    this.posts = [];
  }

  /**
   * 
   * 
   * @memberof BlogTopComponent
   */
  ngOnInit() {
    this.page = 1;
    this.scroll.enable(true);

    this.postsSub = this.posts$.subscribe((posts: PostModel[]) => {
      if (!posts || posts.length == 0) {
        this.ngRedux.dispatch(this.actions.featchPosts(this.page, true));
      }

      this.page = Math.ceil(posts.length / API.SETTING.PER);

      setTimeout(() => this.posts = posts, 100);

      this.scroll.complete();
    });

    this.totalPageSub = this.totalPage$.subscribe((totalPage: number) => {
      this.totalPage = totalPage;
    })
  }

  /**
   * 
   * 
   * @memberof BlogTopComponent
   */
  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
  }

  /**
   * 
   * 
   * @param {string} date 
   * @returns {string} 
   * @memberof BlogTopComponent
   */
  getDateFormat(date: string): string {
    return format(date, 'YYYY/MM/DD');
  }

  /**
   * 
   * 
   * @param {PostModel} post 
   * @memberof BlogTopComponent
   */
  openDialog(post: PostModel): void {
    this.dialog.open(BlogDialogComponent, {
      panelClass: 'rs-full-screen-dialog',
      data: { post },
    });
  }

  /**
   * 
   * 
   * @memberof BlogTopComponent
   */
  scrollCallback(): void {
    if (this.totalPage > this.page) {
      this.scroll.enable(true);
      const targetPage = this.page + 1;
      this.ngRedux.dispatch(this.actions.featchPosts(targetPage, false));
    } else {
      this.scroll.complete();
      this.scroll.enable(false);
    }
  }
}
