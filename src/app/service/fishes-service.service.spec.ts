import { TestBed, inject } from '@angular/core/testing';

import { FishesServiceService } from './fishes-service.service';

describe('FishesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FishesServiceService]
    });
  });

  it('should be created', inject([FishesServiceService], (service: FishesServiceService) => {
    expect(service).toBeTruthy();
  }));
});
