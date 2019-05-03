import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEditComponent } from './profile-edit.component';
import {SharedModule} from "../../shared/shared.module";
import {RouterTestingModule} from "@angular/router/testing";

describe('ProfileEditComponent', () => {
  let component: ProfileEditComponent;
  let fixture: ComponentFixture<ProfileEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileEditComponent ],
      imports:[SharedModule,RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
