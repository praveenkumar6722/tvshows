import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvshowsModule } from '@mylib/tvshows';
import { GenrePageComponent } from './genre-page.component';



@NgModule({
  imports: [
    CommonModule, TvshowsModule
  ],
  declarations: [GenrePageComponent],
  exports: [GenrePageComponent]
})
export class GenrePageModule { }
