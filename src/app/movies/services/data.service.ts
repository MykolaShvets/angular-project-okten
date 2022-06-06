import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

import {IMovieGenre} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  page = new BehaviorSubject<number>(1);
  genres = new BehaviorSubject<IMovieGenre[]>([])

  constructor() {
  }
}
