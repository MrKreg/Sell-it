import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map, switchMap} from "rxjs/operators";
import {RealtyService} from "../../core/services/realty.service";
import {RealtyDetails} from "../../core/models/realty/realty-details.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-realty-details',
  templateUrl: './realty-details.component.html',
  styleUrls: ['./realty-details.component.scss']
})
export class RealtyDetailsComponent implements OnInit {
  realty:RealtyDetails;
  pageType:any;
  realtyForm:FormGroup;
  isEditable:boolean = false;
  constructor(private _route:ActivatedRoute,private _realtyService:RealtyService) {

  }

  ngOnInit() {
      this._route.params.pipe(
        map(params=>params['id']),
        switchMap(id=>this._realtyService.getById(id))
      ).subscribe((realty:RealtyDetails)=>{
          this.realty = realty;
          this.realtyForm = new FormGroup({
              title:new  FormControl(realty.title),
              description: new  FormControl(realty.description),
              price: new  FormControl(realty.price),
              currency: new  FormControl(realty.currency),
              area: new  FormControl(realty.area),
              flooring:new  FormControl(realty.flooring),
              rooms:new  FormControl(realty.rooms),
              ownerPhone: new  FormControl(realty.ownerPhone),
              ownerName: new  FormControl(realty.ownerName),
              offer: new  FormControl(realty.offer),
              creator: new  FormControl(realty.creator),
              link: new  FormControl(realty.link),
              floor: new  FormControl(realty.floor),
              kitchenArea: new  FormControl(realty.kitchenArea),
              resourcetype:new  FormControl(realty.resourcetype)
        });
        this.realtyForm.disable();
      })
  }

  addRealty():void{}

  editRealty():void{
    this.isEditable = true;
    this.realtyForm.enable();
  }

  saveRealty():void{
    this.isEditable = false;
    this.realtyForm.disable();
  }

}
