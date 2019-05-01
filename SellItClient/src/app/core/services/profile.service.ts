import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Profile} from "../models/profile/profile.model";


@Injectable({
  providedIn:"root"
})
export class ProfileService {
  private readonly _url:string;

  constructor(private _http:HttpClient){
    this._url = environment.apiUrl;
  }

  public getCurrentUserProfileInfo():Observable<Profile>{
    return this._http.get(this._url+"users/profile/").pipe(map((x:any)=>{
      let profileModel:Profile = {
        ...x,
        lastName:x.last_name,
        firstName:x.first_name,
        birthDate:x.birth_date
      };
      return profileModel;
    }));
  }

  public update(profile:Profile):Observable<Object>{
    const body = {
      username:profile.username,
      first_name:profile.firstName,
      last_name:profile.lastName,
      birth_date:profile.birthDate
    };
    return this._http.patch(this._url+"users/profile/",body);
  }

}
