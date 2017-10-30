// angular
import { Routes } from '@angular/router';

// components
import { BlogComponent } from './blog.component';

export const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    pathMatch: 'full',
    data: {
      state: 'blog'
    }
  }
];
