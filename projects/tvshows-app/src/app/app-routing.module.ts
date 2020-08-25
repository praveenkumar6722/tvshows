import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ShowDetailsPageComponent } from './pages/show-details-page/show-details-page.component';
import { SearchResultsPageComponent } from './pages/search-results-page/search-results-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AllTvShowsResolver, RouteModule } from '@mylib/core';
import { GenrePageComponent } from './pages/genre-page/genre-page.component';

const routes: Routes = [

  {
    path: 'home',
    component: HomePageComponent,
    resolve: {
      shows: AllTvShowsResolver,
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
      shows: AllTvShowsResolver,
    }
  },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: 'error', redirectTo: 'home' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouteModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
