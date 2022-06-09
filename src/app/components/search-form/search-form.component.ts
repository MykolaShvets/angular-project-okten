import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

import {SearchService} from "../../services";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  form: FormGroup;

  constructor(private searchService: SearchService, private router: Router) {
    this._createForm()
  }

  ngOnInit(): void {
  }

  _createForm(): void{
    this.form = new FormGroup({
      search: new FormControl(null)
    })
  }

  search() {
    const name = this.form.getRawValue().search.split(' ').join('%20')
    this.searchService.searchMovie(name).subscribe({
      next: value => {
        this.searchService.results.next(value);
        this.router.navigate(['search']);
      },
      error: err => console.log(err)
    })
  }
}
