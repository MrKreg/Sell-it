import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Profile} from "../models/profile/profile.model";
import {Utils} from "../utils";


@Injectable({
  providedIn:"root"
})
export class ProfileService {
  private readonly _url:string;

  constructor(private _http:HttpClient){
    this._url = environment.apiUrl;
  }

  public getCurrentUserProfileInfo():Observable<Profile> {
      return this._http.get(this._url + "users/profile/").pipe(map(json => Utils.toCamelCase(json)));
  }
  

  public update(profile:Profile):Observable<Object>{
    const body = Utils.toSnakeCase(profile);
    return this._http.patch(this._url+"users/profile/",body);
  }

}
