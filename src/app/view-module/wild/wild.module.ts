import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WildRoutingModule } from './wild-routing.module';

import { DetailsComponent } from './details/details.component';

@NgModule({
  imports: [
    CommonModule,
    WildRoutingModule
  ],
  declarations: []
})
export class WildModule { }
