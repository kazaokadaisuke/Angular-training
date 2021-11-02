import { TestBed } from '@angular/core/testing';

import { SongSearch.ServiceService } from './song-search.service';

describe('SongSearch.ServiceService', () => {
  let service: SongSearch.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SongSearch.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
