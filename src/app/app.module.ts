import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiServiceComponent } from './api-service/api-service.component';
import { AppHeaderComponent } from './components/app-header';
import { AppFooterComponent } from './components/app-footer';
import { FullLayoutComponent } from './containers/full-layout';
import {BsModalService} from 'ngx-bootstrap';
import {ModalModule} from 'ngx-bootstrap';
import {DetailsComponent} from './view-module/wild/details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    ApiServiceComponent,
    AppHeaderComponent,
    AppFooterComponent,
    FullLayoutComponent,
    DetailsComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot()

  ],
  providers: [BsModalService],
  entryComponents: [DetailsComponent],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
