import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ProfileEditComponent} from "./profile-edit/profile-edit.component";
import {ProfileComponent} from "./profile.component";
import {ProfileAboutComponent} from "./tabs/about/about.component";

const routes: Routes = [
  {
    path:'',
    component:ProfileComponent,
    children:[
      {
        path:'',
        component:ProfileAboutComponent
      },
      {
        path:'edit',
        component:ProfileEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
