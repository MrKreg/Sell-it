import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';


@Component({
    selector     : 'app-layout',
    templateUrl  : './layout.component.html',
    styleUrls    : ['./layout.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit, OnDestroy
{
    private _unsubscribeAll: Subject<any>;
    constructor()
    {
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void
    {

    }

    ngOnDestroy(): void
    {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
