import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {IMovieList} from "../movies/interfaces";
import {apiKey, urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(private http: HttpClient) {
  }

  getUpcoming() {
    return this.http.get<IMovieList>(`${urls.singleMovie}/upcoming${apiKey}`)
  }

  getTopRated() {
    return this.http.get<IMovieList>(`${urls.singleMovie}/top_rated${apiKey}`)
  }
}
