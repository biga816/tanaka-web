// angular
import { Routes } from '@angular/router';

// components
import { HomeComponent } from './home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    data: {
      state: 'home'
    }
  }
];
