import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// routes & components
import { AppComponent } from './app.component';
import { routes } from './app.routes';

// redux
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState, rootReducer } from './app.store';
// import { AppActions } from './app.actions';


// modules
import { SharedModule } from './+shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot(routes),
    SharedModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private ngRedux: NgRedux<IAppState>
  ) {
    ngRedux.configureStore(rootReducer, {});
  }
}
