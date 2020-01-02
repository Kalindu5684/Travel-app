import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AgmCoreModule, GoogleMapsAPIWrapper, LAZY_MAPS_API_CONFIG} from '@agm/core';
import {GoogleMapComponent} from './google-map.component';



@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [],
  exports: []
})
export class GoogleMapModule { }
