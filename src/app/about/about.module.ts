// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// routes & components
import { routes } from './about.routes';
import { AboutComponent } from './about.component';

// shared
import { SharedModule } from '../+shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [],
  declarations: [
    AboutComponent
  ]
})
export class AboutModule {
}
