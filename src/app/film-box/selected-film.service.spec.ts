import { TestBed } from '@angular/core/testing';

import { SelectedFilmService } from './selected-film.service';

describe('SelectedFilmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectedFilmService = TestBed.get(SelectedFilmService);
    expect(service).toBeTruthy();
  });
});
