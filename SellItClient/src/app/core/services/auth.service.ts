import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {JwtToken} from "../models/auth/jwt-token.model";
import {Observable} from "rxjs";
import {SignUpModel} from "../models/auth/sign-up.model";
import {SignInModel} from "../models/auth/sign-in.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn:"root"
})
export class AuthService {
  private readonly _url:string;
  constructor(private _http:HttpClient){
    this._url = environment.apiUrl;
  }

  public signIn(credentials:SignInModel):Observable<JwtToken>{
    return this._http.post<JwtToken>(this._url+"users/token/obtain/",credentials);
  }

  public signUp(credentials:SignUpModel):Observable<JwtToken>{
    return this._http.post<JwtToken>(this._url + "users/sign-up/", credentials);
  }

  public saveTokens(jwtToken:JwtToken):void{
    this.setAccessToken(jwtToken.access);
    this.setRefreshToken(jwtToken.refresh);
  }

  public logout():void{
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }

  public getAccessToken():string{
    return localStorage.getItem('accessToken')
  }

  public getRefreshToken():string{
    return localStorage.getItem('refreshToken')
  }

  public setAccessToken(token:string):void {
     localStorage.setItem('accessToken',token);
  }

  public setRefreshToken(token:string):void {
    localStorage.setItem('refreshToken',token);
  }

  public refreshAccessToken():Observable<JwtToken>{
    return this._http.post<JwtToken>(this._url + "users/token/refresh/", {refresh:this.getRefreshToken()});
  }
}
