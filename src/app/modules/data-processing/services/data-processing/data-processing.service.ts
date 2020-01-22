import { Injectable } from '@angular/core';
import { CoordinatesDTO } from 'src/app/domain/dtos/CoordinatesDTO';
import { HouseDTO } from 'src/app/domain/dtos/HouseDTO';
import { GeolocationApiService } from 'src/app/modules/geolocation/services/geolocation-api/geolocation-api.service';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';


import { RouteResponseDTO } from 'src/app/domain/dtos/here-api-dtos/RouteResponseDTO';
import { HouseDistance } from 'src/app/domain/dtos/Types/HouseDistance';

@Injectable()
export class DataProcessingService {

  constructor(private geolocationApiService: GeolocationApiService) { }

  findHousesDistancesToCoordinates(targetCoordinates: CoordinatesDTO, houses: HouseDTO[]): Observable<HouseDistance[]> {
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

  sortHouseDistanceArrayDescending(houseDistance: HouseDistance[]) {
    return houseDistance.sort((a, b) => a.distance - b.distance);
  }
}
