import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiServiceComponent } from './api-service/api-service.component';
import { AppHeaderComponent } from './components/app-header';
import { AppFooterComponent } from './components/app-footer';
import { FullLayoutComponent } from './containers/full-layout';


@NgModule({
  declarations: [
    AppComponent,
    ApiServiceComponent,
    AppHeaderComponent,
    AppFooterComponent,
    FullLayoutComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
