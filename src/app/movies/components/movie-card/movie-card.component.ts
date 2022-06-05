import {Component, Input, OnInit} from '@angular/core';
import {IMovie} from "../../interfaces/movie-interface";
import {imgAPI} from "../../../constants/urls";
import {DataService} from "../../services/data.service";
import {IMovieGenre} from "../../interfaces/movie-genre-interface";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input()
  movie: IMovie;
  imgApi = imgAPI;
  currentGenres: IMovieGenre[] = [];

  constructor(private data: DataService) {
  }

  ngOnInit(): void {
    this.data.genres.subscribe(value => {
      this.movie.genre_ids?.map(genre_id => {
        value.filter(genre => genre.id === genre_id)
          .map(genre => this.currentGenres.push(genre))
      })
    })
  }

}
