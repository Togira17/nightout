import { TestBed } from '@angular/core/testing';

import { EscuchaHeaderService } from './escucha-header.service';

describe('EscuchaHeaderService', () => {
  let service: EscuchaHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EscuchaHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
