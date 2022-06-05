import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {IMovieGenre} from "../interfaces/movie-genre-interface";
import {MovieService} from "./movie.service";

@Injectable({
  providedIn: 'root'
})
export class MovieGenresResolver implements Resolve<IMovieGenre[]> {

  constructor(private movieService: MovieService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IMovieGenre[]> | Promise<IMovieGenre[]> | IMovieGenre[] {
    return this.movieService.getMovieGenres();
  }

}
