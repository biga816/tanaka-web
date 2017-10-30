import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// routes & components
import { AppComponent } from './app.component';
import { routes } from './app.routes';

// redux
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { createEpics } from 'redux-observable-decorator';
import { IAppState, rootReducer } from './app.store';

// Epics
import { BlogEpics } from './blog/blog.epics';

// modules
import { SharedModule } from './+shared/shared.module';
import { HomeModule } from './home/home.module';
import { BlogModule } from './blog/blog.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgReduxModule,
    SharedModule,
    HomeModule,
    BlogModule,
  ],
  providers: [
    BlogEpics
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private blogEpics: BlogEpics
  ) {
    const epics = [
      createEpics(blogEpics),
    ];
    ngRedux.configureStore(rootReducer, {}, epics);
  }
}
