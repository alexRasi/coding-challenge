import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { AddressDetailsResponseDTO } from 'src/app/domain/dtos/here-api-dtos/AddressDetailsResponseDTO';

import { environment } from 'src/environments/environment';
import { RouteResponseDTO } from 'src/app/domain/dtos/here-api-dtos/RouteResponseDTO';

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
}
