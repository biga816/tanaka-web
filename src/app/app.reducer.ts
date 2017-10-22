import { Action } from 'redux';
import { AppActions } from './app.actions';

export interface IAppState {
  footer: boolean;
}

export const INITIAL_STATE: IAppState = {
  footer: true
};

export function appReducer(state: IAppState = INITIAL_STATE, action: Action): IAppState {
  switch (action.type) {
    case AppActions.SHOW_FOOTER: {
      return {
        ...state,
        footer: true
      };
    }
    case AppActions.HIDE_FOOTER: {
      return {
        ...state,
        footer: false
      };
    }
  }

  // We don't care about any other actions right now.
  return state;
}
