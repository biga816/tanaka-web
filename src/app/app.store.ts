import { combineReducers } from 'redux';
import { appReducer } from './app.reducer';
import { blogReducer } from './blog/blog.reducer';

export interface IAppState {
  app?: any;
  blog?: any;
}

export const rootReducer =
  combineReducers({
    app: appReducer,
    blog: blogReducer
  });
