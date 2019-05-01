import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {RealtyListComponent} from "./realty-list.component";

const routes: Routes = [
  {
    path:'',
    component:RealtyListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealtyRoutingModule { }
