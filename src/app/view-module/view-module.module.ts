import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewModuleRoutingModule } from './view-module-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { WildComponent } from './wild/wild.component';


@NgModule({
  imports: [
    CommonModule,
    ViewModuleRoutingModule
  ],
  declarations: [HomeComponent, AboutComponent, ServicesComponent, WildComponent],


})
export class ViewModuleModule { }
