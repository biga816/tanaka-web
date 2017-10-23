import { Component, OnInit } from '@angular/core';

import { WORKS } from './work-data';

@Component({
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  rekishokuUrl:string = 'http://rekishoku.jp/';
  works: Array<any> = WORKS;

  /**
   * 
   * 
   * @param {string} url 
   * @memberof WorkComponent
   */
  openLink(url: string) {
    setTimeout(() => {
      window.open(url);
    }, 300);
  }
}