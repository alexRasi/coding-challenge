import { Component } from '@angular/core';

import { GeolocationApiService } from './modules/geolocation/services/geolocation-api/geolocation-api.service';
import { HousesFetchingService } from './modules/data-fetching/services/housesFetching/houses-fetching.service';
import { DataProcessingService } from './modules/data-processing/services/data-processing/data-processing.service';

import { forkJoin } from 'rxjs';

import { HouseDTO } from './domain/dtos/HouseDTO';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private dataProcessingService: DataProcessingService,
    private housesFetchingService: HousesFetchingService,
    private geolocationService: GeolocationApiService) {

    // this.findAndSortHousesNearTo(55, 'Eberswalder  Straße', 'berlin', 'germany');

    this.housesFetchingService.fetchAllHouses().subscribe(houseResponse => {

      console.log('--- A List of the houses with more than 5 rooms sorted descending by number of rooms ---');
      const filteredHouses = this.dataProcessingService.filterHousesWithMoreThanRooms(houseResponse.houses, 5);
      const filteredSortedHouses = this.dataProcessingService.sortHousesByRoomsDescending(filteredHouses);
      console.log(filteredSortedHouses);


      console.log('--- A List of incomplete house data sorted by street name ---');
      const incompleteHouses = this.dataProcessingService.filterHousesWithNotAllTheData(houseResponse.houses);
      const incompleteSortedHouse = this.dataProcessingService.sortHousesByStreetName(incompleteHouses);
      console.log(incompleteSortedHouse);

    });

  }

  findAndSortHousesNearTo(houseNumber: number, street: string, city: string, country: string) {
    const fixStreetEncoding = street.split(' ').join('+');

    forkJoin(
      this.geolocationService.getGeocodeByAddress(houseNumber, fixStreetEncoding, city, country),
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
        houseDistances.shift(); // the first one is our target house

        console.log('--- List of Houses near to ' + street + ' ' + houseNumber )
        console.log(houseDistances);

        console.log('--- List of Houses with more 10 than rooms and cost more than 5.000.000€.');
        const housesWithCriteria = this.findHousesWithCriteria(houses, 5000000, 10);
        console.log(housesWithCriteria);
      });

    });
  }

  findHousesWithCriteria(houses: HouseDTO[], priceMoreThan: number, roomsAtLeast: number) {
    return this.dataProcessingService.applyFilterFunctionToHouses(
      houses,
      (house: HouseDTO) => {
        return (
          !(house.params === undefined
            || house.params.rooms === undefined
            || house.params.value === undefined
          )
          && house.params.rooms >= roomsAtLeast
          && house.params.value > priceMoreThan
        );
      }
    );
  }

}
