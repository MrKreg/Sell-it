import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild,  ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';

@Component({
    selector     : 'chat-panel',
    templateUrl  : './chat-panel.component.html',
    styleUrls    : ['./chat-panel.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ChatPanelComponent implements OnInit, AfterViewInit, OnDestroy
{
    contacts: any[];
    chat: any;
    selectedContact: any;
    user: any;

    @ViewChild('replyForm')
    set replyForm(content: NgForm)
    {
        this._replyForm = content;
    }

    @ViewChild('replyInput')
    set replyInput(content: ElementRef)
    {
        this._replyInput = content;
    }


    // Private
    private _replyForm: NgForm;
    private _replyInput: ElementRef;
    private _unsubscribeAll: Subject<any>;

    constructor(
        private _httpClient: HttpClient,
    )
    {

        this._unsubscribeAll = new Subject();
    }


    ngOnInit(): void
    {

    }

    /**
     * After view init
     */
    ngAfterViewInit(): void
    {

    }


    ngOnDestroy(): void
    {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }


    private _prepareChatForReplies(): void
    {
        setTimeout(() => {

            // Reset the reply form
            this._replyForm.reset();
        });
    }

}
