import { Injectable } from '@angular/core';
import { CoordinatesDTO } from 'src/app/domain/dtos/CoordinatesDTO';
import { HouseDTO } from 'src/app/domain/dtos/HouseDTO';
import { GeolocationApiService } from 'src/app/modules/geolocation/services/geolocation-api/geolocation-api.service';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

import { get } from 'lodash';

import { RouteResponseDTO } from 'src/app/domain/dtos/here-api-dtos/RouteResponseDTO';
import { HouseDistance } from 'src/app/domain/dtos/Types/HouseDistance';

@Injectable()
export class DataProcessingService {

  constructor(private geolocationApiService: GeolocationApiService) { }

  findHouseDistancesToCoordinates(targetCoordinates: CoordinatesDTO, houses: HouseDTO[]): Observable<HouseDistance[]> {
    const observablePool: Observable<HouseDistance>[] = [];

    houses.forEach(house => {
      observablePool.push(
        this.geolocationApiService.getRouteByCoordinates(
          targetCoordinates.lat, targetCoordinates.lon, house.coords.lat, house.coords.lon
        ).pipe(
          map(
            routeResponse => this.mapToHouseWithDistance(house, routeResponse)
          )
        )
      );
    });

    return forkJoin(observablePool);
  }

  mapToHouseWithDistance(house: HouseDTO, routeResponse: RouteResponseDTO): HouseDistance {
    return { house, distance: routeResponse.response.route[0].summary.distance };
  }

  sortHouseDistanceArrayDescending(houseDistance: HouseDistance[]): HouseDistance[] {
    return houseDistance.sort((a, b) => a.distance - b.distance);
  }

  sortHousesByRoomsDescending(houses: HouseDTO[]) {
    return houses.sort((a, b) => {
      return this.getNestedValueSafely(a, 'params.rooms', -1) - this.getNestedValueSafely(b, 'params.rooms', -1);
    });
  }

  getClosestHouseDistance(houseDistance: HouseDistance[]): HouseDistance {
    return this.sortHouseDistanceArrayDescending(houseDistance)[1]; // because element 0 is the target house itself
  }

  filterHousesWithMoreThanRooms(houses: HouseDTO[], moreThan: number) {
    return houses.filter(house => this.getNestedValueSafely(house, 'params.rooms', -1) > moreThan);
  }

  getNestedValueSafely(value: any, path: string, fallback: any) {
    return get(value, path, fallback); // fallback to value if doesn't exist
  }

  filterHousesWithNotAllTheData(houses: HouseDTO[]): HouseDTO[] {
    // since we know that the only optional values are params, rooms and value
    return houses.filter(
      house => (house.params === undefined || house.params.rooms === undefined || house.params.value === undefined));
  }

  sortHousesByStreetName(houses: HouseDTO[]) {
    return houses.sort((a, b) => {
      if (a.street.toLocaleLowerCase() > b.street.toLocaleLowerCase()) {
        return 1;
      }
    });
  }

  applyFilterFunctionToHouses(houses: HouseDTO[], filterfunction): HouseDTO[] {
    return houses.filter(filterfunction);
  }
}
