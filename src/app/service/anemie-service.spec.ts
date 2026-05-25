import { TestBed } from '@angular/core/testing';

import { AnemieService } from './anemie-service';

describe('AnemieService', () => {
  let service: AnemieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnemieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
