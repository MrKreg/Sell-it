import {NgModule} from "@angular/core";
import {NgxSpinnerModule} from "ngx-spinner";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import {
    MatButtonModule, MatDatepickerModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule, MatNativeDateModule,
    MatTabsModule
} from "@angular/material";

@NgModule({
  imports: [
      NgxSpinnerModule,
      CommonModule,
      ReactiveFormsModule,
      FlexLayoutModule,
      MatButtonModule,
      MatDividerModule,
      MatIconModule,
      MatTabsModule,
      MatFormFieldModule,
      MatInputModule,
      MatDatepickerModule,
      MatNativeDateModule,
  ],
  exports: [
      NgxSpinnerModule,
      CommonModule,
      ReactiveFormsModule,
      FlexLayoutModule,
      MatButtonModule,
      MatDividerModule,
      MatIconModule,
      MatTabsModule,
      MatFormFieldModule,
      MatInputModule,
      MatDatepickerModule,
      MatNativeDateModule,
  ]
})
export class SharedModule{}
