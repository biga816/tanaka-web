import { Injectable } from '@angular/core';
import { ActionsObservable } from 'redux-observable';
import { Epic } from 'redux-observable-decorator';
import { AboutActions } from './about.actions';
import { AboutService } from './about.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IPayloadAction } from '../+shared/utils/payload-action.types';

@Injectable()
export class AboutEpics {
  constructor(
    private service: AboutService
  ) {}

  @Epic() getPosts = (action$: ActionsObservable<any>) => {
    return action$.ofType(AboutActions.FEATCH_USER)
      .mergeMap(({ payload, meta }: IPayloadAction<any, any>) => {
        return this.service.callUserApi(payload.id).then(
          result => ({
              type: AboutActions.FEATCH_USER_SUCCESS,
              meta: { user: result.user }
          }),
          err => {
            Observable.of({
              type: AboutActions.FEATCH_USER_ERROR
            });
          }
        );
      });
  }

}
