import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthModule} from "./auth/auth.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CoreModule} from "./core/core.module";
import {AlertModule} from "ngx-alerts";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "./core/interceptors/auth.interceptor";
import {LayoutModule} from "./layout/layout.module";
import {StaticModule} from "./static/static.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    CoreModule,
    LayoutModule,
    StaticModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, position: 'right'})
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
