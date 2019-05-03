import { Injectable, Output, EventEmitter } from '@angular/core';
import { IFilm } from './Model/IFilm';

@Injectable({
  providedIn: 'root',
})
export class SelectedFilmService {

  isOpen = false;

  @Output() change: EventEmitter<IFilm> = new EventEmitter();

  public PlayFilm(film: IFilm) {
    this.change.emit(film);
  }
}
