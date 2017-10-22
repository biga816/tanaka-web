import { Injectable } from '@angular/core';
import { Action } from 'redux';

@Injectable()
export class AppActions {
  static SHOW_FOOTER = 'SHOW_FOOTER';
  static HIDE_FOOTER = 'HIDE_FOOTER';

  constructor() {

  }

  showFooter(): Action {
    return {
      type: AppActions.SHOW_FOOTER
    };
  }

  hideFooter(): Action {
    return {
      type: AppActions.HIDE_FOOTER
    };

  }
}
