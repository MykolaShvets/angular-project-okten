import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {IMovieList} from "../interfaces/movie-list-interface";
import {apiKey, urls} from "../../constants/urls";
import {IMovie} from "../interfaces/movie-interface";
import {Observable} from "rxjs";
import {IMovieGenre} from "../interfaces/movie-genre-interface";

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  constructor(private http: HttpClient) { }

  getAll(page: number): Observable<IMovieList>{
    return this.http.get<IMovieList>(`${urls.allMovies}&page=${page}`)
  }

  getById(id: string): Observable<IMovie>{
    return this.http.get<IMovie>(`${urls.singleMovie}/${id}${apiKey}`)
  }

  getByGenre(genreId: string, page: number): Observable<IMovieList>{
    return this.http.get<IMovieList>(`${urls.allMovies}&page=${page}&with_genres=${genreId}`)
  }

  getMovieGenres(): Observable<IMovieGenre[]>{
    return this.http.get<IMovieGenre[]>(urls.allGenres)
  }

}
