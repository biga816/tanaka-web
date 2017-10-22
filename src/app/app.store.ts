import { combineReducers } from 'redux';
import { appReducer } from './app.reducer';

export interface IAppState {
  app?: any;
}

export const rootReducer =
  combineReducers({
    app: appReducer
  });
