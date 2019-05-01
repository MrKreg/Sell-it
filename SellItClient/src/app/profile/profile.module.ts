import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  MatButtonModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatTabsModule
} from '@angular/material';
import {SharedModule} from "../shared/shared.module";
import {ProfilePhotosVideosComponent} from "./tabs/photos-videos/photos-videos.component";
import {ProfileAboutComponent} from "./tabs/about/about.component";
import {ProfileTimelineComponent} from "./tabs/timeline/timeline.component";
import {ProfileComponent} from "./profile.component";
import {ProfileEditComponent} from "./profile-edit/profile-edit.component";
import {ProfileRoutingModule} from "./profile-routing.module";



@NgModule({
    declarations: [
        ProfileComponent,
        ProfileTimelineComponent,
        ProfileAboutComponent,
        ProfilePhotosVideosComponent,
        ProfileEditComponent,

    ],
    imports: [
        ProfileRoutingModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatTabsModule,
        MatFormFieldModule,
        MatInputModule,
        SharedModule
    ]
})
export class ProfileModule
{
}
