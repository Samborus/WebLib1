import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IFilm } from '../film-box/Model/IFilm';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class FilmsService {

  private _url = '/assets/data/films.json';

  constructor(private http: HttpClient) { }

  getFilms(): Observable<IFilm[]> {
    return this.http.get<IFilm[]>(this._url)
                    .catch(this.errorHandler);
  }
  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || 'Server Error');
  }

}
