import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatTabsModule } from '@angular/material/tabs';

import { BaseMaterialModule } from '@mylib/core';

import { ShowCardComponent } from './show-card/show-card.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { PopularShowsCarouselComponent } from './popular-shows-carousel/popular-shows-carousel.component';
import { HomeContainerComponent } from './home-container/home-container.component';
import { GenreCollectionComponent } from './genre-collection/genre-collection.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { GenreComponent } from './genre/genre.component';

@NgModule({
  declarations: [ShowCardComponent, ShowDetailsComponent, PopularShowsCarouselComponent,
    HomeContainerComponent, GenreCollectionComponent, SearchResultsComponent, GenreComponent],
  imports: [CommonModule, BaseMaterialModule, MatCarouselModule.forRoot(),
    MatChipsModule, FlexLayoutModule, MatTabsModule
  ],
  exports: [HomeContainerComponent, ShowDetailsComponent, SearchResultsComponent, GenreComponent]
})
export class TvshowsModule { }

