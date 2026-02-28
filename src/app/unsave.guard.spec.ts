import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { unsaveGuard } from './unsave.guard';

describe('unsaveGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => unsaveGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
