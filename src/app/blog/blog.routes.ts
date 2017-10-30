// angular
import { Routes } from '@angular/router';

// components
import { BlogTopComponent } from './blog-top/blog-top.component';

export const routes: Routes = [
  {
    path: '',
    component: BlogTopComponent,
    pathMatch: 'full',
    data: {
      state: 'blog'
    }
  }
];
