import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RealtyListComponent} from "./realty-list.component";
import {SharedModule} from "../shared/shared.module";
import {RealtyRoutingModule} from "./realty-routing.module";
import {MatProgressSpinnerModule} from "@angular/material";

@NgModule({
  declarations: [RealtyListComponent],
  imports: [
    RealtyRoutingModule,
    CommonModule,
    SharedModule,
    MatProgressSpinnerModule
  ]
})
export class RealtyModule { }
