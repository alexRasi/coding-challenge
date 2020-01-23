import { Component, OnInit } from '@angular/core';
import { DataProcessingService } from 'src/app/modules/data-processing/services/data-processing/data-processing.service';
import { HousesFetchingService } from 'src/app/modules/data-fetching/services/housesFetching/houses-fetching.service';
import { filter } from 'rxjs/operators';
import { HousesResponseDTO } from 'src/app/domain/dtos/HousesResponseDTO';
import { HouseDTO } from 'src/app/domain/dtos/HouseDTO';

@Component({
  selector: 'app-filtered-houses-by-rooms-page',
  templateUrl: './filtered-houses-by-rooms-page.component.html',
  styleUrls: ['./filtered-houses-by-rooms-page.component.css']
})
export class FilteredHousesByRoomsPageComponent implements OnInit {
  rooms = 5;

  housesResponse: HousesResponseDTO;
  modifiedHouses: HouseDTO[] = [];

  constructor(
    private dataProcessingService: DataProcessingService,
    private housesFetchingService: HousesFetchingService) { }

  ngOnInit() {
  }

  filterAndSort() {
    this.housesFetchingService.fetchAllHouses().subscribe((houseResponse: HousesResponseDTO) => {
      this.housesResponse = houseResponse;
      this.modifiedHouses = this.dataProcessingService.filterHousesWithMoreThanRooms(houseResponse.houses, this.rooms);
      this.modifiedHouses = this.dataProcessingService.sortHousesByRoomsDescending(this.modifiedHouses);
    });
  }

}
