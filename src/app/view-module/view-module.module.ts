import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewModuleRoutingModule } from './view-module-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { WildComponent } from './wild/wild.component';
import { StartPageComponent } from './start-page/start-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ScenicComponent } from './scenic/scenic.component';


@NgModule({
    imports: [
        CommonModule,
        ViewModuleRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [HomeComponent, AboutComponent, ServicesComponent, WildComponent, StartPageComponent, ScenicComponent],


})
export class ViewModuleModule { }
