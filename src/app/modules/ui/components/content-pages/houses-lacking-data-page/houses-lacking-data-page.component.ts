import { Component, OnInit } from '@angular/core';

import { ProgressSpinerService } from '../../../services/progress-spinner/progress-spiner.service';
import { DataProcessingService } from 'src/app/modules/data-processing/services/data-processing/data-processing.service';
import { HousesFetchingService } from 'src/app/modules/data-fetching/services/housesFetching/houses-fetching.service';

import { HouseDTO } from 'src/app/domain/dtos/HouseDTO';

@Component({
  selector: 'app-houses-lacking-data-page',
  templateUrl: './houses-lacking-data-page.component.html',
  styleUrls: ['./houses-lacking-data-page.component.css']
})
export class HousesLackingDataPageComponent implements OnInit {

  houses: HouseDTO[];

  constructor(
    private progressSpinerService: ProgressSpinerService,
    private dataProcessingService: DataProcessingService,
    private housesFetchingService: HousesFetchingService) { }

  ngOnInit() {
  }

  fetchAndSortHousesLackingData() {

    this.progressSpinerService.showSpinner();
    this.housesFetchingService.fetchAllHouses().subscribe(houseResponse => {
      this.houses = this.dataProcessingService.filterHousesWithNotAllTheData(houseResponse.houses);
      this.houses = this.dataProcessingService.sortHousesByStreetName(this.houses);
      this.progressSpinerService.hideSpinner();
    });
  }

}
