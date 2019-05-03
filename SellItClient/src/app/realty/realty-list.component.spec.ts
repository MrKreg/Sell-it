import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtyListComponent } from './realty-list.component';
import {SharedModule} from "../shared/shared.module";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('RealtyListComponent', () => {
  let component: RealtyListComponent;
  let fixture: ComponentFixture<RealtyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtyListComponent ],
      imports:[SharedModule,HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
