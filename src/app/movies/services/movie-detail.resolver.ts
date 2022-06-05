import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {IMovie} from "../interfaces/movie-interface";
import {MovieService} from "./movie.service";

@Injectable({
  providedIn: 'root'
})
export class MovieDetailResolver implements Resolve<IMovie> {

  constructor(private movieService: MovieService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IMovie> | Promise<IMovie> | IMovie {
    const id = route.params['movieId'];
   return this.movieService.getById(id);
  }

}
