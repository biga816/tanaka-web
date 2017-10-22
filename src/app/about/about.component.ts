import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// shared
import { URLS } from '../+shared/utils/const';

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],

})
export class AboutComponent {
  facebookUrl: string = URLS.FACEBOOK;
  instagramUrl: string = URLS.INSTAGRAM;
  githubUrl: string = URLS.GITHUB;
  preScrollTop: number = 0;

  constructor(
    private router: Router
  ) { }

  openLink(url: string) {
    setTimeout(() => {
      window.open(url);
    }, 300);
  }
}