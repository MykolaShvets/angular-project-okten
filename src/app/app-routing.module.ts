import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MainLayoutComponent} from "./layouts";
import {HomePageComponent} from "./components";
import {UpcomingResolver, TopRatedResolver} from "./services";

const routes: Routes = [
  {path: '', component: MainLayoutComponent, children:[
      {path: '', component: HomePageComponent, resolve: {upcoming: UpcomingResolver, topRated: TopRatedResolver} },
      {path: 'movies', loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule)}
    ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
