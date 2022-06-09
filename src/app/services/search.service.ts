import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IMovieList} from "../movies/interfaces";
import {urls} from "../constants";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  results = new BehaviorSubject<IMovieList | null>(null)

  constructor(private http: HttpClient) { }

  searchMovie(name: string){
    return this.http.get<IMovieList>(`${urls.searchMovie}&query=${name}`)
  }
}
