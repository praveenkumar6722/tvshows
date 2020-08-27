import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsPageComponent } from './search-results-page.component';
import { TvshowsModule } from 'features/tvshows/src/public-api';



@NgModule({
  imports: [
    CommonModule, TvshowsModule
  ],
  declarations: [SearchResultsPageComponent],
  exports: [SearchResultsPageComponent]
})
export class SearchResultsPageModule { }
