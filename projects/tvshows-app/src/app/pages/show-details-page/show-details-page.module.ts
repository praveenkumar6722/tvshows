import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvshowsModule } from '@mylib/tvshows';

import { ShowDetailsPageComponent } from './show-details-page.component';

@NgModule({
  imports: [
    CommonModule, TvshowsModule
  ],
  declarations: [ShowDetailsPageComponent],
  exports: [ShowDetailsPageComponent]
})
export class ShowDetailsPageModule { }
