// angular
import { Routes } from '@angular/router';

// components
import { WorkComponent } from './work.component';

export const routes: Routes = [
  {
    path: '',
    component: WorkComponent,
    pathMatch: 'full',
    data: {
      state: 'work'
    }
  }
];
