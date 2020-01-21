import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HousesResponseDTO } from 'src/app/domain/dtos/HousesResponseDTO';

@Injectable()
export class HousesFetchingService {

  constructor(private httpClient: HttpClient) { }

  fetchAllHouses(): Observable<HousesResponseDTO> {
    return this.httpClient.get<HousesResponseDTO>('https://demo.interfacema.de/programming-assessment-1.0/buildings');
  }
}
