import { Component } from '@angular/core';

import { DataProcessingService } from 'src/app/modules/data-processing/services/data-processing/data-processing.service';
import { HousesFetchingService } from 'src/app/modules/data-fetching/services/housesFetching/houses-fetching.service';
import { GeolocationApiService } from 'src/app/modules/geolocation/services/geolocation-api/geolocation-api.service';
import { ProgressSpinerService } from '../../../services/progress-spinner/progress-spiner.service';

import { forkJoin } from 'rxjs';

import { HouseDistance } from 'src/app/domain/dtos/Types/HouseDistance';

@Component({
  selector: 'app-houses-near-address-page',
  templateUrl: './houses-near-address-page.component.html'
})
export class HousesNearAddressPageComponent {
  inputStreet = 'Eberswalder Straße';
  inputNumber = 55;

  houseIsYoursInput = true;

  filtersVisible = false;

  // strings instead of numbers for empty input handling
  roomsAtLeastInput = '10';
  priceLimitInput = '5000000';

  // hardcoded for simplicity
  city = 'berlin';
  country = 'germany';

  // source of truth
  houseDistancesResults: HouseDistance[] = [];

  modifiedHouseDistancesResults: HouseDistance[] = [];

  constructor(
    private progressSpinerService: ProgressSpinerService,
    private dataProcessingService: DataProcessingService,
    private housesFetchingService: HousesFetchingService,
    private geolocationService: GeolocationApiService) { }

  findAndSortHousesNearAddress() {
    this.progressSpinerService.showSpinner();

    const fixStreetEncoding = this.inputStreet.split(' ').join('+');

    forkJoin(
      this.geolocationService.getGeocodeByAddress(this.inputNumber, fixStreetEncoding, this.city, this.country),
      this.housesFetchingService.fetchAllHouses()
    ).subscribe(obs => {
      const address = obs[0];
      const houses = obs[1].houses;

      if (address.Response.View.length === 0) {
        this.modifiedHouseDistancesResults = [];
        this.progressSpinerService.hideSpinner();
        return ;
      }

      const addressCordinates = this.geolocationService.getAddressDetailsResponseCoordinates(address);
      this.dataProcessingService.findHouseDistancesToCoordinates(
        addressCordinates,
        houses
      ).subscribe(houseDistances => {
        houseDistances = this.dataProcessingService.sortHouseDistanceArrayDescending(houseDistances);

        if (this.houseIsYoursInput) {
          houseDistances.shift(); // the first one is our target house
        }

        this.houseDistancesResults = houseDistances;
        this.modifiedHouseDistancesResults = houseDistances;

        this.progressSpinerService.hideSpinner();
      });

    });
  }

  applyFilters() {
    this.modifiedHouseDistancesResults = this.dataProcessingService.filterHouseDistancesWithAllTheData(this.houseDistancesResults);

    if (this.inputValueIsNotEmpty(this.priceLimitInput)) {
      this.modifiedHouseDistancesResults =
        this.dataProcessingService.filterHouseDistancesByValueLimit(this.modifiedHouseDistancesResults, +this.priceLimitInput);
    }

    if (this.inputValueIsNotEmpty(this.roomsAtLeastInput)) {
      this.modifiedHouseDistancesResults =
        this.dataProcessingService.filterHouseDistancesByRoomsAtLeast(this.modifiedHouseDistancesResults, +this.roomsAtLeastInput);
    }
  }

  toggleFilters() {
    this.filtersVisible ? this.filtersVisible = false : this.filtersVisible = true;
  }

  inputValueIsNotEmpty(val: string) {
    return val !== undefined && val !== '';
  }
}
