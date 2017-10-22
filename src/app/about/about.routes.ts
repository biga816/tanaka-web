// angular
import { Routes } from '@angular/router';

// components
import { AboutComponent } from './about.component';

export const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    pathMatch: 'full',
    data: {
      state: 'about'
    }
  }
];
