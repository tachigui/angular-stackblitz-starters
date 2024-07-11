import { TestBed } from '@angular/core/testing';

import { LogStore } from './log.store';

describe('LogStore', () => {
  let service: LogStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
