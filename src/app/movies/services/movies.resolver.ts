import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {IMovieList} from "../interfaces/movie-list-interface";
import {MovieService} from "./movie.service";
import {DataService} from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class MoviesResolver implements Resolve<IMovieList> {

  page: number = 1;

  constructor(private movieService: MovieService, private data: DataService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IMovieList> | Promise<IMovieList> | IMovieList {
    const genreId = route.params['genreId']
    this.data.page.subscribe(value => this.page = value)
    if(!genreId){
     return this.movieService.getAll(this.page)
    }
    return this.movieService.getByGenre(genreId, this.page)
  }
}
