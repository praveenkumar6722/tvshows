import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ShowDetailsPageComponent } from './pages/show-details-page/show-details-page.component';
import { SearchResultsPageComponent } from './pages/search-results-page/search-results-page.component';
import { GenrePageComponent } from './pages/genre-page/genre-page.component';
import { TvShowsResolver } from '@mylib/core';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    resolve: {
      shows: TvShowsResolver,
    }
  },
  {
    path: 'detail/:id',
    component: ShowDetailsPageComponent,
  },
  {
    path: 'search',
    component: SearchResultsPageComponent
  },
  {
    path: 'genre/:genre',
    component: GenrePageComponent,
    resolve: {
      shows: TvShowsResolver,
    }
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
