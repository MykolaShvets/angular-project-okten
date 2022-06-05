import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MoviesComponent} from "./components/movies/movies.component";
import {MoviesResolver} from "./services/movies.resolver";
import {MovieDetailComponent} from "./components/movie-detail/movie-detail.component";
import {MovieDetailResolver} from "./services/movie-detail.resolver";
import {MovieGenresResolver} from "./services/movie-genres.resolver";


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
