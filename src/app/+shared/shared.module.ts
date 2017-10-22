// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppActions } from '../app.actions';

// Directives
import { ScrollDirective } from './directives/scroll.directive';

// Components
import { SnsIconsComponent } from './components/sns-icons/sns-icons.component';

// libs
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatIconModule, MatListModule, MatProgressSpinnerModule,
  MatSidenavModule, MatSlideToggleModule, MatSnackBarModule, MatTabsModule, MatToolbarModule, MatChipsModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    ScrollDirective,
    SnsIconsComponent
  ],
  entryComponents: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatChipsModule,
    FlexLayoutModule,
  ],
  providers: [AppActions],
  exports: [
    // Modules
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatChipsModule,
    FlexLayoutModule,
    // Directives
    ScrollDirective,
    // Components
    SnsIconsComponent
  ]
})
export class SharedModule {
}
