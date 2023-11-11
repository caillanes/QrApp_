import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import { GuardDocenteGuard } from './guard-docente.guard';

describe('GuardDocenteGuard', () => {
  let guard: GuardDocenteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardDocenteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
