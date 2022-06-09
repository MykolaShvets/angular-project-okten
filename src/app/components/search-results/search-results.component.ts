import { Component, OnInit } from '@angular/core';
import {SearchService} from "../../services";
import {IMovie} from "../../movies/interfaces";

class Imovie {
}

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  findMovies: IMovie[] | undefined;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.results.subscribe(value => {
      this.findMovies = value?.results
    })
  }

}
