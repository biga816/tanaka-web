import { Injectable } from '@angular/core';
import { Action } from 'redux';

@Injectable()
export class AppActions {
  static SHOW_FOOTER = 'SHOW_FOOTER';
  static HIDE_FOOTER = 'HIDE_FOOTER';

  /**
   * Creates an instance of AppActions.
   * @memberof AppActions
   */
  constructor() {

  }

  /**
   * 
   * 
   * @returns {Action} 
   * @memberof AppActions
   */
  showFooter(): Action {
    return {
      type: AppActions.SHOW_FOOTER
    };
  }

  /**
   * 
   * 
   * @returns {Action} 
   * @memberof AppActions
   */
  hideFooter(): Action {
    return {
      type: AppActions.HIDE_FOOTER
    };

  }
}
