import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsPageComponent } from './search-results-page.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SearchResultsPageComponent],
  exports: [SearchResultsPageComponent]
})
export class SearchResultsPageModule { }
