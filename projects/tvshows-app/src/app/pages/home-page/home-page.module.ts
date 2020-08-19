import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { CoreModule } from '@mylib/core';
import { BaseMaterialModule } from 'core/src/public-api';
import { TvshowsModule } from 'features/tvshows/src/public-api';



@NgModule({
  imports: [
    CommonModule, CoreModule, BaseMaterialModule, TvshowsModule
  ],
  declarations: [HomePageComponent],
  exports: [HomePageComponent]
})
export class HomePageModule { }
