import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScenicRoutingModule } from './scenic-routing.module';
import { ScenicComponent } from './scenic.component';

@NgModule({
  imports: [
    CommonModule,
    ScenicRoutingModule
  ],
  declarations: [ScenicComponent]
})
export class ScenicModule { }
