import { TestBed } from '@angular/core/testing';

import { LoremService } from './lorem.service';

describe('LoremService', () => {
  let service: LoremService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoremService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
