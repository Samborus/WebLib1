import { Injectable, Output, EventEmitter } from '@angular/core';
import { IFilm } from '../film-box/Model/IFilm';

@Injectable()
export class SelectedFilmService {

  isOpen = false;

  @Output() change: EventEmitter<IFilm> = new EventEmitter();

  public PlayFilm(film: IFilm) {
    this.change.emit(film);
  }
}
