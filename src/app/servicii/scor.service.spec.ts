import { TestBed } from '@angular/core/testing';

import { ScorService } from './scor.service';

describe('ScorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScorService = TestBed.get(ScorService);
    expect(service).toBeTruthy();
  });
});
