import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageModule } from './pages/home-page/home-page.module';
import { ShowDetailsPageModule } from './pages/show-details-page/show-details-page.module';
import { PageNotFoundModule } from './pages/page-not-found/page-not-found.module';
import { SearchResultsPageModule } from './pages/search-results-page/search-results-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Pages
    HomePageModule,
    SearchResultsPageModule,
    ShowDetailsPageModule,
    PageNotFoundModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
