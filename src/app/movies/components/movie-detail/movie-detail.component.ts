import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IMovie} from "../../interfaces/movie-interface";
import {imgAPI} from "../../../constants/urls";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  currentMovie: IMovie;
  imgAPI = imgAPI

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({moviesDetail}) => {
      this.currentMovie = moviesDetail;
    })
  }

}
