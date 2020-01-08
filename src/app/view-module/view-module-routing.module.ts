import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ServicesComponent} from './services/services.component';
import {WildComponent} from './wild/wild.component';
import {StartPageComponent} from './start-page/start-page.component';
import {ScenicComponent} from './scenic/scenic.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'start-page'
    },
    children: [
      { path: '', redirectTo: 'start-page', pathMatch: 'full'},
      {path: 'start-page', component: StartPageComponent},
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'services', component: ServicesComponent},
      {path: 'wild', component: WildComponent },
      {path: 'scenic', component: ScenicComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewModuleRoutingModule { }
