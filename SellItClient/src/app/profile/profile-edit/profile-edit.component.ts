import { Component, OnInit } from '@angular/core';
import {Profile} from "../../core/models/profile/profile.model";
import {ProfileService} from "../../core/services/profile.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {

  public profile:Profile;
  public profileForm:FormGroup;
  constructor
    (
      private _formBuilder:FormBuilder,
      private _profileService:ProfileService,
      private _router:Router
    ) {

      }

  ngOnInit() {
    this._profileService.getCurrentUserProfileInfo().subscribe((profile:Profile)=>{
      this.profile = profile;
      this.profileForm = this._formBuilder.group({
        username:[this.profile.username,Validators.required],
        firstName:[this.profile.firstName,Validators.required],
        lastName:[this.profile.lastName,Validators.required],
        birthDate:[this.profile.birthDate,Validators.required]
      })
    });
  }

  public save(profile:Profile):void{
    if(!this.profileForm.invalid){
      this._profileService.update(profile).subscribe(()=>{
        this._router.navigateByUrl('/profile');
      })
    }
  }

}
