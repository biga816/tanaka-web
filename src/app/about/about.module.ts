// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutActions } from './about.actions';
import { AboutEpics } from './about.epics';
import { AboutService } from './about.service';

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
  providers: [
    AboutActions,
    AboutEpics,
    AboutService
  ],
  declarations: [
    AboutComponent
  ]
})
export class AboutModule {
}
