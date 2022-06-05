import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {IMovieList} from "../movies/interfaces/movie-list-interface";
import {HomePageService} from "./home-page.service";

@Injectable({
  providedIn: 'root'
})

export class TopRatedResolver implements Resolve<IMovieList> {

  constructor(private homeService: HomePageService) {
  }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IMovieList> | Promise<IMovieList> | IMovieList {
    return this.homeService.getTopRated()
  }

}
