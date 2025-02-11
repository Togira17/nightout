import { TestBed } from '@angular/core/testing';

import { DiscotecasService } from './discotecas.service';

describe('DiscotecasService', () => {
  let service: DiscotecasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscotecasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
