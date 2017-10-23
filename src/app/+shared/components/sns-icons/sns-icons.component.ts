import { Component, Input } from '@angular/core';

// shared
import { URLS } from '../../utils/const';

@Component({
  selector: 'sns-icons',
  template: `
    <div [ngClass]="{'white-icons': isWhite}"> 
      <button mat-icon-button (click)="openLink(facebookUrl)">
        <i class="sns-button fa fa-facebook-square" aria-hidden="true"></i>
      </button>
      <button mat-icon-button (click)="openLink(instagramUrl)">
        <i class="sns-button fa fa-instagram" aria-hidden="true"></i>
      </button>  
      <button mat-icon-button (click)="openLink(githubUrl)">
        <i class="sns-button fa fa-github" aria-hidden="true"></i>
      </button>    
    </div>
  `,
  styleUrls: ['./sns-icons.component.scss']
})
export class SnsIconsComponent {
  @Input() set whiteIcons(white: any) {
    this.isWhite = true;
  }

  isWhite = false;
  facebookUrl: string = URLS.FACEBOOK;
  instagramUrl: string = URLS.INSTAGRAM;
  githubUrl: string = URLS.GITHUB;
  preScrollTop: number = 0;

  /**
   * 
   * 
   * @param {string} url 
   * @memberof SnsIconsComponent
   */
  openLink(url: string): void {
    setTimeout(() => {
      window.open(url);
    }, 300);
  }
}
