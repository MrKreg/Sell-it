import { Component, OnInit } from '@angular/core';
import {Profile} from "../../core/models/profile/profile.model";
import {ProfileService} from "../../core/services/profile.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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
      private _profileService:ProfileService
    ) {

      }

  ngOnInit() {
    this._profileService.getCurrentUserProfileInfo().subscribe((profile:Profile)=>{
      this.profile = profile;
    });
    this.profileForm = this._formBuilder.group({
        userName:[this.profile.username,Validators.required],
        firstName:[this.profile.firstName,Validators.required],
        lastName:[this.profile.lastName,Validators.required],
        birthday:[this.profile.birthDate,Validators.required]
    })
  }

}
