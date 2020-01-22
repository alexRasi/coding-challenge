import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { AddressDetailsResponseDTO } from 'src/app/domain/dtos/here-api-dtos/AddressDetailsResponseDTO';
import { RouteResponseDTO } from 'src/app/domain/dtos/here-api-dtos/RouteResponseDTO';
import { CoordinatesDTO } from 'src/app/domain/dtos/CoordinatesDTO';

import { environment } from 'src/environments/environment';

/*
 * Integration with the HERE routing API
 */

@Injectable()
export class GeolocationApiService {

  private geocodeByAddressURL = 'https://geocoder.ls.hereapi.com/6.2/geocode.json';
  private routeByCoordinatesURL = 'https://route.ls.hereapi.com/routing/7.2/calculateroute.json';

  constructor(private httpClient: HttpClient) { }

  getGeocodeByAddress(
    housenumber: number,
    street: string,
    city: string,
    country: string,
  ): Observable<AddressDetailsResponseDTO> {

    const params = new HttpParams()
      .set('housenumber', housenumber.toString())
      .set('street', street)
      .set('city', city)
      .set('country', country)
      .set('apiKey', environment.apiKey);

    return this.httpClient.get<AddressDetailsResponseDTO>(this.geocodeByAddressURL, { params });
  }

  getRouteByCoordinates(
    waypoint0: string,
    waypoint1: string,
    mode: string,
    departure: string,
  ): Observable<RouteResponseDTO> {

    const params = new HttpParams()
      .set('waypoint0', waypoint0.toString())
      .set('waypoint1', waypoint1)
      .set('mode', mode)
      .set('departure', departure)
      .set('apiKey', environment.apiKey);

    return this.httpClient.get<RouteResponseDTO>(this.routeByCoordinatesURL, { params });
  }

  getRouteResponseDistance(response: RouteResponseDTO): number {
    /*
    For simplicity we consider there is always one route.
    They are sorted by distance
    */
    return response.response.route[0].summary.distance;
  }

  getAddressDetailsResponseCoordinates(response: AddressDetailsResponseDTO): CoordinatesDTO {
    const position = response.Response.View[0].Result[0].Location.DisplayPosition;

    /*
    For simplicity we consider there is always one View.
    */
    return { lat: position.Latitude, lon: position.Longitude };
  }
}
