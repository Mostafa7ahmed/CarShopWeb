import { TestBed } from '@angular/core/testing';

import { AllcarService } from './allcar.service';

describe('AllcarService', () => {
  let service: AllcarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllcarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
