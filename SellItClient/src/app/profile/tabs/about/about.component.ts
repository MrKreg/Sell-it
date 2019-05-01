import {Component, Input, OnDestroy, OnInit} from '@angular/core';


import { fuseAnimations } from 'src/animations';
import {Profile} from "../../../core/models/profile/profile.model";

@Component({
    selector   : 'profile-about',
    templateUrl: './about.component.html',
    styleUrls  : ['./about.component.scss'],
    animations : fuseAnimations
})
export class ProfileAboutComponent implements OnInit, OnDestroy
{
    @Input()
    public profile:Profile;

    public isEditable:boolean = false;

    constructor(
    )
    {

    }


    ngOnInit(): void
    {

    }

    ngOnDestroy(): void
    {

    }
}
