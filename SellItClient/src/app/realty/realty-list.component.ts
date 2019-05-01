import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Realty} from "../core/models/realty/realty.model";
import {RealtyService} from "../core/services/realty.service";

@Component({
  selector: 'app-realty-list',
  templateUrl: './realty-list.component.html',
  styleUrls: ['./realty-list.component.scss']
})
export class RealtyListComponent implements OnInit {

  public realty$:Observable<Realty[]>;
  constructor(private _realtyService:RealtyService) { }

  ngOnInit() {
    this.realty$ = this._realtyService.getAll();
  }

}
