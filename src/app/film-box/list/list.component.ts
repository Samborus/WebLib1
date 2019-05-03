import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../films.service';
import { IFilm } from '../Model/IFilm';
import { SelectedFilmService } from '../selected-film.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public films = [];
  constructor(private _filmService: FilmsService , private selectedFilm: SelectedFilmService) { }

  ngOnInit() {
    this._filmService.getFilms().subscribe(data => this.films = data);
  }

  playFilm(film: IFilm): void {
    this.selectedFilm.PlayFilm(film);
  }
}
