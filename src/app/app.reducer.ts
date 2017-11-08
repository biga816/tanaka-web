import { Action } from 'redux';
import { AppActions } from './app.actions';

export interface IAppState {
  footer: boolean;
  sidenav: boolean;
}

export const INITIAL_STATE: IAppState = {
  footer: true,
  sidenav: false
};

/**
 * 
 * 
 * @export
 * @param {IAppState} [state=INITIAL_STATE] 
 * @param {Action} action 
 * @returns {IAppState} 
 */
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
    case AppActions.OPEN_SIDENAV: {
      return {
        ...state,
        sidenav: true
      };
    }
    case AppActions.CLOSE_SIDENAV: {
      return {
        ...state,
        sidenav: false
      };
    }
  }

  // We don't care about any other actions right now.
  return state;
}
