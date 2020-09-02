import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule, BaseMaterialModule } from '@mylib/core';
import { TvshowsModule } from '@mylib/tvshows';

import { HomePageComponent } from './home-page.component';



@NgModule({
  imports: [
    CommonModule, CoreModule, BaseMaterialModule, TvshowsModule
  ],
  declarations: [HomePageComponent],
  exports: [HomePageComponent]
})
export class HomePageModule { }
