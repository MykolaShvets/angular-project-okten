import {Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IMovie} from "../../interfaces/movie-interface";
import {IMovieGenre} from "../../interfaces/movie-genre-interface";
import {DataService} from "../../services/data.service";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {


  genres: IMovieGenre[];
  movies: IMovie[];
  page: number = 1;
  genre: string | undefined;


  constructor(private activatedRoute: ActivatedRoute, private data: DataService, private movieService: MovieService) {

  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({moviesData}) => {
      this.movies = moviesData.results
    })
  }


  changePg(page: number) {
    this.page = page
    this.activatedRoute.params.subscribe(({genreId}) => this.genre = genreId)
    if (!this.genre) {
      this.movieService.getAll(page).subscribe(value => {
        this.movies = value.results
      })
    } else {
      this.movieService.getByGenre(this.genre as string, page).subscribe(value => {
        this.movies = value.results
      })
    }

  }
}
