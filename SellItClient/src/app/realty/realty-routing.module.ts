import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {RealtyListComponent} from "./realty-list.component";
import {RealtyDetailsComponent} from "./realty-details/realty-details.component";

const routes: Routes = [
  {
    path:'',
    component:RealtyListComponent
  },
  {
    path:'details/:id',
    component:RealtyDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealtyRoutingModule { }
