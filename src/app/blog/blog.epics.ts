import { Injectable } from '@angular/core';
import { ActionsObservable } from 'redux-observable';
import { Epic } from 'redux-observable-decorator';
import { BlogActions } from './blog.actions';
import { BlogService } from './blog.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IPayloadAction } from '../+shared/utils/payload-action.types';

@Injectable()
export class BlogEpics {
  constructor(
    private service: BlogService
  ) {}

  @Epic() getPosts = (action$: ActionsObservable<any>) => {
    return action$.ofType(BlogActions.FEATCH_POSTS)
      .mergeMap(({ payload, meta }: IPayloadAction<any, any>) => {
        return this.service.callPostsApi(payload.page, payload.id).then(
          result => ({
              type: BlogActions.FEATCH_POSTS_SUCCESS,
              meta: { posts: result.posts, totalPage:result.totalPage, isRefresh: meta.isRefresh }
          }),
          err => {
            Observable.of({
              type: BlogActions.FEATCH_POSTS_ERROR
            });
          }
        );
      });
  }

}
