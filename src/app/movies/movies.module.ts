import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { MoviesComponent } from './components/movies/movies.component';
import {MoviesRoutingModule} from "./movies-routing.module";
import {MovieService} from "./services/movie.service";
import {MoviesResolver} from "./services/movies.resolver";
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import {MovieDetailResolver} from "./services/movie-detail.resolver";
import { MovieGenresComponent } from './components/movie-genres/movie-genres.component';
import {MovieGenresResolver} from "./services/movie-genres.resolver";
import {DataService} from "./services/data.service";



@NgModule({
  declarations: [
    MoviesComponent,
    MovieCardComponent,
    MovieDetailComponent,
    MovieGenresComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    HttpClientModule,
  ],
  exports: [
    MovieCardComponent
  ],
  providers: [
    MovieService,
    MoviesResolver,
    MovieDetailResolver,
    MovieGenresResolver,
    DataService,
  ]
})
export class MoviesModule { }
