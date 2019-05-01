import {NgModule} from "@angular/core";
import {LayoutComponent} from "./layout.component";
import {ChatPanelComponent} from "./components/chat-panel/chat-panel.component";
import {ContentComponent} from "./components/content/content.component";
import {FooterComponent} from "./components/footer/footer.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {QuickPanelComponent} from "./components/quick-panel/quick-panel.component";
import {ToolbarComponent} from "./components/toolbar/toolbar.component";
import {
   MatButtonModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSlideToggleModule,
  MatToolbarModule
} from "@angular/material";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {LayoutRoutingModule} from "./layout-routing.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {NavbarHorizontalStyle1Component} from "./components/navbar/horizontal/style-1/style-1.component";
import {ProfileModule} from "../profile/profile.module";

@NgModule({
  imports:[
    LayoutRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule
  ],
  declarations:[
    LayoutComponent,
    ChatPanelComponent,
    ContentComponent,
    FooterComponent,
    NavbarComponent,
    QuickPanelComponent,
    ToolbarComponent,
    NavbarHorizontalStyle1Component
  ],
  exports:[LayoutComponent]
})
export class LayoutModule{}
