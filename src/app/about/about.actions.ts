import { Injectable } from '@angular/core';
import { Action } from 'redux';

// shared
import { IPayloadAction } from '../+shared/utils/payload-action.types';

@Injectable()
export class AboutActions {
  static FEATCH_USER = 'FEATCH_USER';
  static FEATCH_USER_SUCCESS = 'FEATCH_USER_SUCCESS';
  static FEATCH_USER_ERROR = 'FEATCH_CONTACTS_ERROR';

  featchUser(id: number): IPayloadAction<any, any> {
    return {
      type: AboutActions.FEATCH_USER,
      meta: null,
      payload: { id }
    };
  }
}
