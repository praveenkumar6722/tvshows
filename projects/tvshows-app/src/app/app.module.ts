
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NavigationModule } from '@mylib/navigation';
import { CoreModule } from '@mylib/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageModule } from './pages/home-page/home-page.module';
import { ShowDetailsPageModule } from './pages/show-details-page/show-details-page.module';
import { SearchResultsPageModule } from './pages/search-results-page/search-results-page.module';
import { environment } from '../environments/environment';
import { GenrePageModule } from './pages/genre-page/genre-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavigationModule,
    MatProgressSpinnerModule,

    // Pages
    HomePageModule,
    SearchResultsPageModule,
    ShowDetailsPageModule,
    GenrePageModule,

    CoreModule.forRoot(environment),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
