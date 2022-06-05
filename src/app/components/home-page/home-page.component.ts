import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IMovie} from "../../movies/interfaces/movie-interface";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  upcoming: IMovie[];
  topRated: IMovie[];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({upcoming, topRated}) => {
      this.upcoming = upcoming.results;
      this.topRated = topRated.results;
    })
  }

}
