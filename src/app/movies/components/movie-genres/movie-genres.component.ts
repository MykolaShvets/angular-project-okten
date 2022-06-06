import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IMovieGenre} from "../../interfaces";
import {DataService} from "../../services";

@Component({
  selector: 'app-movie-genres',
  templateUrl: './movie-genres.component.html',
  styleUrls: ['./movie-genres.component.css']
})
export class MovieGenresComponent implements OnInit {

  movieGenres: IMovieGenre[];

  constructor(private activatedRoute: ActivatedRoute, private data: DataService) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({genres}) => {
      this.movieGenres = genres.genres;
      this.data.genres.next(genres.genres);
    })
  }

}
