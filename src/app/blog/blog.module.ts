// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BlogActions } from './blog.actions';
import { BlogEpics } from './blog.epics';
import { BlogService } from './blog.service';

// routes & components
import { routes } from './blog.routes';
import { BlogTopComponent } from './blog-top/blog-top.component';
import { BlogDialogComponent } from './blog-dialog/blog-dialog.component';

// shared
import { SharedModule } from '../+shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [
    BlogActions,
    BlogEpics,
    BlogService
  ],
  declarations: [
    BlogTopComponent,
    BlogDialogComponent
  ],
  entryComponents: [
    BlogDialogComponent
  ]
})
export class BlogModule { }
