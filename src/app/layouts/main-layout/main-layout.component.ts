import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  theme: string = 'body__dark';
  isDark: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  changeTheme() {
    this.isDark = !this.isDark
    if(!this.isDark){
     return this.theme = 'body__light'
    }
    return this.theme = 'body__dark'
  }
}
