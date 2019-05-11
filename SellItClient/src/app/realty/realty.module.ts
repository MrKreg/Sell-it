import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RealtyListComponent} from "./realty-list.component";
import {SharedModule} from "../shared/shared.module";
import {RealtyRoutingModule} from "./realty-routing.module";
import {MatProgressSpinnerModule} from "@angular/material";
import {RealtyDetailsComponent} from "./realty-details/realty-details.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [RealtyListComponent, RealtyDetailsComponent],
  imports: [
    RealtyRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    MatProgressSpinnerModule
  ]
})
export class RealtyModule { }
