import {NgModule} from "@angular/core";
import {SignInComponent} from "./sign-in/sign-in.component";
import {MatButtonModule, MatCheckboxModule,  MatFormFieldModule, MatInputModule} from "@angular/material";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent
  ],
  imports     : [
    RouterModule,
    BrowserModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    SharedModule
  ],
  exports:[
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent
  ]
})
export class AuthModule{

}
