import { Component, OnInit, ElementRef } from '@angular/core';
import { IFilm } from '../../Model/IFilm';
import { SelectedFilmService } from '../../Service/selectedfilm.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  set film(film: IFilm) {
    this.Url = film.Url;
    console.log('Url = ' + this.Url);
    const player = this.elRef.nativeElement.querySelector('video');
    player.load();
    player.play();
  }

  private Url = '';

  constructor(private selectedFilm: SelectedFilmService, private elRef: ElementRef) { }

  ngOnInit() {
    this.selectedFilm.change.subscribe(newFilm => this.film = newFilm);
  }
}
