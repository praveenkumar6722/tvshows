import { NgModule } from '@angular/core';
import { ShowCardComponent } from './show-card/show-card.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { CommonModule } from '@angular/common';
import { PopularShowsCarouselComponent } from './popular-shows-carousel/popular-shows-carousel.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { HomeContainerComponent } from './home-container/home-container.component';
import { GenereCollectionComponent } from './genere-collection/genere-collection.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { BaseMaterialModule } from '@mylib/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [ShowCardComponent, ShowDetailsComponent, PopularShowsCarouselComponent, HomeContainerComponent, GenereCollectionComponent],
  imports: [CommonModule, BaseMaterialModule, MatCarouselModule.forRoot(),
    MatGridListModule, MatChipsModule, MatExpansionModule, FlexLayoutModule
  ],
  exports: [HomeContainerComponent]
})
export class TvshowsModule { }

