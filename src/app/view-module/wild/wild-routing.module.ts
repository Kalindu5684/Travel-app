import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WildComponent} from './wild.component';
import {DetailsComponent} from './details/details.component';


const routes: Routes = [
  {
    path: '',
    component: WildComponent,
    data: {
      title: 'wild'
    },
    children: [
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WildRoutingModule { }
