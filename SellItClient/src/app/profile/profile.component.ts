import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import { fuseAnimations } from 'src/animations';
import {ProfileService} from "../core/services/profile.service";
import {Profile} from "../core/models/profile/profile.model";

@Component({
    selector     : 'profile',
    templateUrl  : './profile.component.html',
    styleUrls    : ['./profile.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ProfileComponent implements OnInit
{
    public profile:Profile;
    constructor(private _profileService:ProfileService)
    {

    }

  ngOnInit(): void {
      this._profileService.getCurrentUserProfileInfo().subscribe((profile:Profile)=>{
          this.profile = profile;
      });
  }


}
