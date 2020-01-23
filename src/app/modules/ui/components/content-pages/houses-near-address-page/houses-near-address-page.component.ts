import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-houses-near-address-page',
  templateUrl: './houses-near-address-page.component.html',
  styleUrls: ['./houses-near-address-page.component.css']
})
export class HousesNearAddressPageComponent implements OnInit {
  inputStreet = 'Eberswalder Straße';
  inputNumber = 55;

  filtersVisible = false;

  roomsAtLeastInput = 10;
  priceLimitInput = 5000000;

  constructor() { }

  ngOnInit() {
  }

  findAndSortHousesNearAddress() {

  }

  toggleFilters() {
    this.filtersVisible ? this.filtersVisible = false : this.filtersVisible = true;
  }

}
