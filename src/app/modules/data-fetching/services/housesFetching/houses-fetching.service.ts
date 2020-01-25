import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HousesResponseDTO } from 'src/app/domain/dtos/HousesResponseDTO';

import { environment } from 'src/environments/environment';

@Injectable()
export class HousesFetchingService {

  constructor(private httpClient: HttpClient) { }

  fetchAllHouses(): Observable<HousesResponseDTO> {
    return this.httpClient.get<HousesResponseDTO>(environment.houseFetchingEndpoint);
  }
}
