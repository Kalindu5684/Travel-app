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
import {AgmCoreModule} from '@agm/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import {GoogleMapComponent} from './modules/google-map/google-map.component';
import {DetailsSinharajaComponent} from './view-module/wild/details-sinharaja/details-sinharaja.component';
import {WildUdawalawaComponent} from './view-module/wild/wild-udawalawa/wild-udawalawa.component';
import {DetailsWilpattuwaComponent} from './view-module/wild/details-wilpattuwa/details-wilpattuwa.component';
import {DetailsHoragollaComponent} from './view-module/wild/details-horagolla/details-horagolla.component';
import {DetailsMinneriyaComponent} from './view-module/wild/details-minneriya/details-minneriya.component';


@NgModule({
  declarations: [
    AppComponent,
    ApiServiceComponent,
    AppHeaderComponent,
    AppFooterComponent,
    FullLayoutComponent,
    DetailsComponent,
    GoogleMapComponent,
    DetailsSinharajaComponent,
    WildUdawalawaComponent,
    DetailsWilpattuwaComponent,
    DetailsHoragollaComponent,
    DetailsMinneriyaComponent

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ModalModule.forRoot(),
        AgmCoreModule,
        BsDatepickerModule.forRoot(),
        BrowserAnimationsModule,
        TimepickerModule.forRoot(),
      AgmCoreModule.forRoot({
        apiKey: 'AIzaSyBaSY-Can6xk4dm8_h6A3u1LgAtNf1FoMw'
      })

    ],
  providers: [BsModalService],
  entryComponents: [DetailsComponent, DetailsSinharajaComponent, WildUdawalawaComponent, DetailsWilpattuwaComponent, DetailsHoragollaComponent, DetailsMinneriyaComponent],
  exports: [
    GoogleMapComponent

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
