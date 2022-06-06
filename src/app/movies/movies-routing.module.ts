import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {MoviesComponent, MovieDetailComponent} from "./components";
import {MoviesResolver, MovieGenresResolver, MovieDetailResolver} from "./services";


const routes: Routes = [
  {path: '', component: MoviesComponent, resolve: {genres: MovieGenresResolver, moviesData: MoviesResolver}},
  {path: 'genre/:genreId', component: MoviesComponent, resolve: {genres: MovieGenresResolver, moviesData: MoviesResolver}},
  {path: ':movieId', component: MovieDetailComponent, resolve: {moviesDetail: MovieDetailResolver}}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MoviesRoutingModule {
}
