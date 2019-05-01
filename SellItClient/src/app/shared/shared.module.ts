import {NgModule} from "@angular/core";
import {NgxSpinnerModule} from "ngx-spinner";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [NgxSpinnerModule,CommonModule,ReactiveFormsModule,FlexLayoutModule],
  exports: [NgxSpinnerModule,CommonModule,ReactiveFormsModule,FlexLayoutModule]
})
export class SharedModule{}
