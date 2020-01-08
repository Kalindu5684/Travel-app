import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WildRoutingModule } from './wild-routing.module';
import {AppModule} from '../../app.module';
import { WildUdawalawaComponent } from './wild-udawalawa/wild-udawalawa.component';
import { DetailsWilpattuwaComponent } from './details-wilpattuwa/details-wilpattuwa.component';
import { DetailsHoragollaComponent } from './details-horagolla/details-horagolla.component';
import { DetailsMinneriyaComponent } from './details-minneriya/details-minneriya.component';
// import {AgmCoreModule} from '@agm/core';


@NgModule({
    imports: [
        CommonModule,
        WildRoutingModule,
        AppModule
    ],
  declarations: []
})
export class WildModule { }
