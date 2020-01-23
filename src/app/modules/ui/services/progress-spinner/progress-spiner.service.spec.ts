import { TestBed } from '@angular/core/testing';

import { ProgressSpinerService } from './progress-spiner.service';

describe('ProgressSpinerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProgressSpinerService = TestBed.get(ProgressSpinerService);
    expect(service).toBeTruthy();
  });
});
