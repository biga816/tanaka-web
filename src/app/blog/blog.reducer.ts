import { Action } from 'redux';
import { BlogActions } from './blog.actions';

// shared
import { PostModel } from '../+shared/models/post.model';
import { IPayloadAction } from '../+shared/utils/payload-action.types';

export interface IBlogState {
  posts: PostModel[];
  totalPage: number
}

export const INITIAL_STATE: IBlogState = {
  posts: [],
  totalPage: null
};

/**
 * 
 * 
 * @export
 * @param {IBlogState} [state=INITIAL_STATE] 
 * @param {IPayloadAction<any, any>} action 
 * @returns {IBlogState} 
 */
export function blogReducer(state: IBlogState = INITIAL_STATE, action: IPayloadAction<any, any>): IBlogState {
  switch (action.type) {
    case BlogActions.FEATCH_POSTS_SUCCESS: {
      const posts = Array.isArray(action.meta.posts) ? action.meta.posts : [action.meta.posts];

      return {
        ...state,
        posts: action.meta.isRefresh ? posts : state.posts.concat(posts),
        totalPage: action.meta.totalPage
      };
    }
  }

  // We don't care about any other actions right now.
  return state;
}
