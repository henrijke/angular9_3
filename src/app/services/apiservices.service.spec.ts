import { TestBed, inject } from '@angular/core/testing';

import { ApiservicesService } from './apiservices.service';

describe('ApiservicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiservicesService]
    });
  });

  it('should be created', inject([ApiservicesService], (service: ApiservicesService) => {
    expect(service).toBeTruthy();
  }));
});
