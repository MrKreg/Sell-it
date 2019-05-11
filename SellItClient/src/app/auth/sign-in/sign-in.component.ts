import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { fuseAnimations } from 'src/animations';
import {AuthService} from "../../core/services/auth.service";
import {SignInModel} from "../../core/models/auth/sign-in.model";
import {Router} from "@angular/router";
import {JwtToken} from "../../core/models/auth/jwt-token.model";

@Component({
    selector   : 'sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls  : ['./sign-in.component.scss'],
    animations : fuseAnimations
})
export class SignInComponent implements OnInit
{
    loginForm: FormGroup;
    constructor(
        private _formBuilder: FormBuilder,
        private _router:Router,
        private _authService:AuthService
    )
    {
    }

    ngOnInit(): void
    {
        this.loginForm = this._formBuilder.group({
            username   : ['', [Validators.required]],
            password: ['', Validators.required]
        });
    }

    public signIn(credentials:SignInModel):void{
      this._authService.signIn(credentials).subscribe((jwtToken:JwtToken)=>{
        this._authService.saveTokens(jwtToken);
        this._router.navigateByUrl('');
      })
    }
}
