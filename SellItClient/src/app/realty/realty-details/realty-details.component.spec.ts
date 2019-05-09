import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtyDetailsComponent } from './realty-details.component';

describe('RealtyDetailsComponent', () => {
  let component: RealtyDetailsComponent;
  let fixture: ComponentFixture<RealtyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
