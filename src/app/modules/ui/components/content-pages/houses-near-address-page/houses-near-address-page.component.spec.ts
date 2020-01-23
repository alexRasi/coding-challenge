import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesNearAddressPageComponent } from './houses-near-address-page.component';

describe('HousesNearAddressPageComponent', () => {
  let component: HousesNearAddressPageComponent;
  let fixture: ComponentFixture<HousesNearAddressPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousesNearAddressPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesNearAddressPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
