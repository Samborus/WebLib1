import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ListComponent } from './list/list.component';
import { FilmsService } from './films.service';
import { PlayerComponent } from './player/player.component';
import { SelectedFilmService } from './selected-film.service';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule
  ],
  exports: [ListComponent]
})
export class FilmBoxModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FilmBoxModule,
      providers: [ FilmsService, HttpClient, SelectedFilmService ]
    };
  }
}
