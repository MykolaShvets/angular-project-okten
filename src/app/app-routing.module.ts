import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {UpcomingResolver} from "./services/upcoming.resolver";
import {TopRatedResolver} from "./services/top-rated.resolver";

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
