import { Action } from 'redux';
import { AboutActions } from './about.actions';

// shared
import { UserModel } from '../+shared/models/user.model';
import { IPayloadAction } from '../+shared/utils/payload-action.types';

export interface IAboutState {
  user: UserModel[];
}

export const INITIAL_STATE: IAboutState = {
  user: null
};

/**
 * 
 * 
 * @export
 * @param {IAboutState} [state=INITIAL_STATE] 
 * @param {IPayloadAction<any, any>} action 
 * @returns {IAboutState} 
 */
export function aboutReducer(state: IAboutState = INITIAL_STATE, action: IPayloadAction<any, any>): IAboutState {
  switch (action.type) {
    case AboutActions.FEATCH_USER_SUCCESS: {
      const user = action.meta.user;

      return {
        ...state,
        user
      };
    }
  }

  // We don't care about any other actions right now.
  return state;
}
