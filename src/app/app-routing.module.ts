import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MainLayoutComponent} from "./layouts";
import {HomePageComponent, SearchResultsComponent} from "./components";
import {UpcomingResolver, TopRatedResolver} from "./services";

const routes: Routes = [
  {path: '', component: MainLayoutComponent, children:[
      {path: '', component: HomePageComponent, resolve: {upcoming: UpcomingResolver, topRated: TopRatedResolver} },
      {path: 'movies', loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule)},
      {path: 'search', component: SearchResultsComponent}
    ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
