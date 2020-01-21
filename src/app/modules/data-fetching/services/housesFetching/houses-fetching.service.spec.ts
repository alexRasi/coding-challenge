import { TestBed } from '@angular/core/testing';

import { HousesFetchingService } from './houses-fetching.service';

describe('HousesFetchingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HousesFetchingService = TestBed.get(HousesFetchingService);
    expect(service).toBeTruthy();
  });
});
