// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppActions } from '../app.actions';

// directives
import { ScrollDirective } from './directives/scroll.directive';

// components
import { SnsIconsComponent } from './components/sns-icons/sns-icons.component';

// services
import { ApiService } from './services/api.service';

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
  providers: [
    AppActions,
    ApiService
  ],
  exports: [
    // libs
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
    // directives
    ScrollDirective,
    // components
    SnsIconsComponent
  ]
})
export class SharedModule {
}
