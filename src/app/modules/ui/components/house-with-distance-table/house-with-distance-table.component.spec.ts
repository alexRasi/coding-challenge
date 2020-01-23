import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseWithDistanceTableComponent } from './house-with-distance-table.component';

describe('HouseWithDistanceTableComponent', () => {
  let component: HouseWithDistanceTableComponent;
  let fixture: ComponentFixture<HouseWithDistanceTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseWithDistanceTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseWithDistanceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
