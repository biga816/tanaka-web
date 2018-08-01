import { combineReducers } from 'redux';
import { appReducer } from './app.reducer';
import { blogReducer } from './blog/blog.reducer';
import { aboutReducer } from "./about/about.reducer";

export interface IAppState {
  app?: any;
  blog?: any;
  about?: any;
}

export const rootReducer =
  combineReducers({
    app: appReducer,
    blog: blogReducer,
    about: aboutReducer
  });
