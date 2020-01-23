import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesLackingDataPageComponent } from './houses-lacking-data-page.component';

describe('HousesLackingDataPageComponent', () => {
  let component: HousesLackingDataPageComponent;
  let fixture: ComponentFixture<HousesLackingDataPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousesLackingDataPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesLackingDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
