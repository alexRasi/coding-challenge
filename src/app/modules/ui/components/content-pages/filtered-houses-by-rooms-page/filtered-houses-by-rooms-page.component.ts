import { Component } from '@angular/core';

import { DataProcessingService } from 'src/app/modules/data-processing/services/data-processing/data-processing.service';
import { HousesFetchingService } from 'src/app/modules/data-fetching/services/housesFetching/houses-fetching.service';
import { ProgressSpinerService } from '../../../services/progress-spinner/progress-spiner.service';

import { HousesResponseDTO } from 'src/app/domain/dtos/HousesResponseDTO';
import { HouseDTO } from 'src/app/domain/dtos/HouseDTO';

@Component({
  selector: 'app-filtered-houses-by-rooms-page',
  templateUrl: './filtered-houses-by-rooms-page.component.html'
})
export class FilteredHousesByRoomsPageComponent {
  rooms = 5;

  housesResponse: HousesResponseDTO;
  modifiedHouses: HouseDTO[] = [];

  constructor(
    private progressSpinerService: ProgressSpinerService,
    private dataProcessingService: DataProcessingService,
    private housesFetchingService: HousesFetchingService) { }

  filterAndSort() {
    this.progressSpinerService.showSpinner();
    this.housesFetchingService.fetchAllHouses().subscribe((houseResponse: HousesResponseDTO) => {
      this.housesResponse = houseResponse;
      this.modifiedHouses = this.dataProcessingService.filterHousesWithMoreThanRooms(houseResponse.houses, this.rooms);
      this.modifiedHouses = this.dataProcessingService.sortHousesByRoomsDescending(this.modifiedHouses);
      this.progressSpinerService.hideSpinner();
    });
  }
}
