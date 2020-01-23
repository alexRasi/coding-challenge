import { Component, OnInit } from '@angular/core';

import { DataProcessingService } from 'src/app/modules/data-processing/services/data-processing/data-processing.service';
import { HousesFetchingService } from 'src/app/modules/data-fetching/services/housesFetching/houses-fetching.service';
import { GeolocationApiService } from 'src/app/modules/geolocation/services/geolocation-api/geolocation-api.service';

import { forkJoin } from 'rxjs';
import { HouseDistance } from 'src/app/domain/dtos/Types/HouseDistance';
import { ProgressSpinerService } from '../../../services/progress-spinner/progress-spiner.service';

@Component({
  selector: 'app-houses-near-address-page',
  templateUrl: './houses-near-address-page.component.html',
  styleUrls: ['./houses-near-address-page.component.css']
})
export class HousesNearAddressPageComponent implements OnInit {
  inputStreet = 'Eberswalder Straße';
  inputNumber = 55;

  houseIsYoursInput = true;

  filtersVisible = false;

  roomsAtLeastInput = 10;
  priceLimitInput = 5000000;

  // hardcoded for simplicity
  city = 'berlin';
  country = 'germany';

  sortedHouseDistancesResults: HouseDistance[] = [];

  constructor(
    private progressSpinerService: ProgressSpinerService,
    private dataProcessingService: DataProcessingService,
    private housesFetchingService: HousesFetchingService,
    private geolocationService: GeolocationApiService) { }

  ngOnInit() {
  }

  findAndSortHousesNearAddress() {
    this.progressSpinerService.showSpinner();

    const fixStreetEncoding = this.inputStreet.split(' ').join('+');

    forkJoin(
      this.geolocationService.getGeocodeByAddress(this.inputNumber, fixStreetEncoding, this.city, this.country),
      this.housesFetchingService.fetchAllHouses()
    ).subscribe(obs => {
      const address = obs[0];
      const houses = obs[1].houses;

      const addressCordinates = this.geolocationService.getAddressDetailsResponseCoordinates(address);
      this.dataProcessingService.findHouseDistancesToCoordinates(
        addressCordinates,
        houses
      ).subscribe(houseDistances => {
        houseDistances = this.dataProcessingService.sortHouseDistanceArrayDescending(houseDistances);

        if (this.houseIsYoursInput) {
          houseDistances.shift(); // the first one is our target house
        }

        this.sortedHouseDistancesResults = houseDistances;

        this.progressSpinerService.hideSpinner();
      });

    });
  }

  toggleFilters() {
    this.filtersVisible ? this.filtersVisible = false : this.filtersVisible = true;
  }

}
