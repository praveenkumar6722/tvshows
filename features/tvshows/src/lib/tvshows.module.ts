import { NgModule } from '@angular/core';
import { ShowCardComponent } from './show-card/show-card.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { BaseMaterialModule } from 'core/src/public-api';
import { CommonModule } from '@angular/common';
import { PopularShowsCarouselComponent } from './popular-shows-carousel/popular-shows-carousel.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { HomeContainerComponent } from './home-container/home-container.component';


@NgModule({
  declarations: [ShowCardComponent, ShowDetailsComponent, PopularShowsCarouselComponent, HomeContainerComponent],
  imports: [CommonModule, BaseMaterialModule, MatCarouselModule.forRoot()
  ],
  exports: [HomeContainerComponent]
})
export class TvshowsModule { }

