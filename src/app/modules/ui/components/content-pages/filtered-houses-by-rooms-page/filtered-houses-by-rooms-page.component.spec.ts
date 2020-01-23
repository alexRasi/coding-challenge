import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredHousesByRoomsPageComponent } from './filtered-houses-by-rooms-page.component';

describe('FilteredHousesByRoomsPageComponent', () => {
  let component: FilteredHousesByRoomsPageComponent;
  let fixture: ComponentFixture<FilteredHousesByRoomsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteredHousesByRoomsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredHousesByRoomsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
