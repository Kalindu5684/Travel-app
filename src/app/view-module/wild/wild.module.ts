import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WildRoutingModule } from './wild-routing.module';
// import {AgmCoreModule} from '@agm/core';


@NgModule({
  imports: [
    CommonModule,
    WildRoutingModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyBaSY-Can6xk4dm8_h6A3u1LgAtNf1FoMw'
    // })
  ],
  declarations: []
})
export class WildModule { }
