// angular
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', loadChildren: './home/home.module#HomeModule'},
  { path: 'about', loadChildren: './about/about.module#AboutModule'},
  { path: 'work', loadChildren: './work/work.module#WorkModule'},
  { path: '**', redirectTo: '/home' }
];
