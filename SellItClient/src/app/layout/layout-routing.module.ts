import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from "./layout.component";

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'profile',
        loadChildren:'../profile/profile.module#ProfileModule'
      },
      {
        path:'realty',
        loadChildren:'../realty/realty.module#RealtyModule'
      },
      {
        path:'**',
        redirectTo:'/not-found'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
