import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import { ServicedocenteService } from './servicedocente.service';

describe('ServicedocenteService', () => {
  let service: ServicedocenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(ServicedocenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
