import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowDetailsPageComponent } from './show-details-page.component';
import { TvshowsModule } from 'features/tvshows/src/public-api';


@NgModule({
  imports: [
    CommonModule, TvshowsModule
  ],
  declarations: [ShowDetailsPageComponent],
  exports: [ShowDetailsPageComponent]
})
export class ShowDetailsPageModule { }
