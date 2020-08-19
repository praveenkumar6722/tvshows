import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllTvShowsResolver } from './resolve/shows.resolver';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [AllTvShowsResolver]
})
export class RouteModule { }
