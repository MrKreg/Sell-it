import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Realty} from "../models/realty/realty.model";

@Injectable({
  providedIn:"root"
})
export class RealtyService {
  private readonly _url:string;

  constructor(private _http:HttpClient){
    this._url = environment.apiUrl;
  }

  public getAll():Observable<Realty[]>{
    return this._http.get<Realty[]>(this._url+"realty/default/");
  }

  public getById(id:number):Observable<RelatyDetails>{
    return this._http.get<RelatyDetails>(this._url+`realty/default/${id}`);
  }
}
