import { Injectable } from '@angular/core';
import { Action } from 'redux';

// shared
import { IPayloadAction } from '../+shared/utils/payload-action.types';

@Injectable()
export class BlogActions {
  static FEATCH_POSTS = 'FEATCH_POSTS';
  static FEATCH_POSTS_SUCCESS = 'FEATCH_POSTS_SUCCESS';
  static FEATCH_POSTS_ERROR = 'FEATCH_CONTACTS_ERROR';

  featchPosts(page: number, isRefresh?: boolean, id?: number): IPayloadAction<any, any> {
    return {
      type: BlogActions.FEATCH_POSTS,
      meta: { isRefresh },
      payload: { id, page }
    };
  }
}
