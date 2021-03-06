import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {NgbRatingModule} from "@ng-bootstrap/ng-bootstrap";


import {MoviesRoutingModule} from "./movies-routing.module";
import {MovieService, DataService, MovieGenresResolver, MovieDetailResolver, MoviesResolver} from "./services";
import {MovieCardComponent, MovieGenresComponent, MovieDetailComponent, MoviesComponent} from './components';


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
    NgbRatingModule
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
export class MoviesModule {
}
