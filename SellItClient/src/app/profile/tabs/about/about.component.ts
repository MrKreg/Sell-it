import {Component, Input, OnDestroy, OnInit} from '@angular/core';


import { fuseAnimations } from 'src/animations';
import {Profile} from "../../../core/models/profile/profile.model";
import {ProfileService} from "../../../core/services/profile.service";
import {Observable} from "rxjs";

@Component({
    selector   : 'profile-about',
    templateUrl: './about.component.html',
    styleUrls  : ['./about.component.scss'],
    animations : fuseAnimations
})
export class ProfileAboutComponent implements OnInit, OnDestroy
{
    public profile$:Observable<Profile>;
    constructor(
        private _profileService:ProfileService
    )
    {

    }

    ngOnInit(): void
    {
        this.profile$ = this._profileService.getCurrentUserProfileInfo();
    }

    ngOnDestroy(): void
    {

    }
}
