import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-houses-near-address-page',
  templateUrl: './houses-near-address-page.component.html',
  styleUrls: ['./houses-near-address-page.component.css']
})
export class HousesNearAddressPageComponent implements OnInit {
  inputStreet = 'Eberswalder Straße';
  inputNumber = 55;

  constructor() { }

  ngOnInit() {
  }

  findAndSortHousesNearAddress() {
    
  }

}
