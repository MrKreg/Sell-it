import { Component, OnDestroy, OnInit } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {AuthService} from "../../../core/services/auth.service";
import {Router} from "@angular/router";
import {Profile} from "../../../core/models/profile/profile.model";
import {ProfileService} from "../../../core/services/profile.service";



@Component({
    selector   : 'toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls  : ['./toolbar.component.scss']
})

export class ToolbarComponent implements OnInit, OnDestroy
{
    horizontalNavbar: boolean;
    rightNavbar: boolean;
    hiddenNavbar: boolean;
    languages: any;
    selectedLanguage: any;
    userStatusOptions: any[];
    profile$:Observable<Profile>;

    // Private
    private _unsubscribeAll: Subject<any>;

    constructor(
      private _authService:AuthService,
      private _profileService:ProfileService,
      private _router:Router
    )
    {
        // Set the defaults
        this.userStatusOptions = [
            {
                'title': 'Online',
                'icon' : 'icon-checkbox-marked-circle',
                'color': '#4CAF50'
            },
            {
                'title': 'Away',
                'icon' : 'icon-clock',
                'color': '#FFC107'
            },
            {
                'title': 'Do not Disturb',
                'icon' : 'icon-minus-circle',
                'color': '#F44336'
            },
            {
                'title': 'Invisible',
                'icon' : 'icon-checkbox-blank-circle-outline',
                'color': '#BDBDBD'
            },
            {
                'title': 'Offline',
                'icon' : 'icon-checkbox-blank-circle-outline',
                'color': '#616161'
            }
        ];

        this.languages = [
            {
                id   : 'en',
                title: 'English',
                flag : 'us'
            },
            {
                id   : 'tr',
                title: 'Turkish',
                flag : 'tr'
            }
        ];
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this.profile$ = this._profileService.getCurrentUserProfileInfo();
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Search
     *
     * @param value
     */
    public search(value): void
    {
        // Do your search here...
        console.log(value);
    }

    public logout():void{
      this._authService.logout();
      this._router.navigateByUrl('/sign-in');
    }
}
