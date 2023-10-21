import { TestBed } from '@angular/core/testing';

import { GuardDocenteGuard } from './guard-docente.guard';

describe('GuardDocenteGuard', () => {
  let guard: GuardDocenteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardDocenteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
