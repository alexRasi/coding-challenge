import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { AddressDetailsResponseDTO } from 'src/app/domain/dtos/here-api-dtos/AddressDetailsResponseDTO';

import { environment } from 'src/environments/environment';

@Injectable()
export class GeolocationApiService {

  private path = 'https://geocoder.ls.hereapi.com/6.2/geocode.json';

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

    return this.httpClient.get<AddressDetailsResponseDTO>(this.path, {params});
  }
}
