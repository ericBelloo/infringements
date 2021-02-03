import { TestBed } from '@angular/core/testing';

import { InfringementService } from './infringement.service';

describe('InfringementService', () => {
  let service: InfringementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfringementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
