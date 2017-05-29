import { TestBed, inject } from '@angular/core/testing';

import { EventRegistryService } from './event-registry.service';

describe('EventRegistryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventRegistryService]
    });
  });

  it('should ...', inject([EventRegistryService], (service: EventRegistryService) => {
    expect(service).toBeTruthy();
  }));
});
