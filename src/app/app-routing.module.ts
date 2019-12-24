import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FullLayoutComponent} from './containers/full-layout';

const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    loadChildren: './view-module/view-module.module#ViewModuleModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
