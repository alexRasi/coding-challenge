import { TestBed } from '@angular/core/testing';

import { GeolocationApiService } from './geolocation-api.service';

describe('GeolocationApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeolocationApiService = TestBed.get(GeolocationApiService);
    expect(service).toBeTruthy();
  });
});
