import { Component, OnDestroy, OnInit } from '@angular/core';

import { fuseAnimations } from 'src/animations';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
    selector   : 'profile-photos-videos',
    templateUrl: './photos-videos.component.html',
    styleUrls  : ['./photos-videos.component.scss'],
    animations : fuseAnimations
})
export class ProfilePhotosVideosComponent implements OnInit, OnDestroy
{
    photosVideos: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ProfileService} _profileService
     */
    constructor(
    )
    {
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
}
