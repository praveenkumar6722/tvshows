import { Component, OnInit, Input } from '@angular/core';
import { Show } from '@mylib/core';

@Component({
  selector: 'f-tvshows-popular-shows-carousel',
  templateUrl: './popular-shows-carousel.component.html',
  styleUrls: ['./popular-shows-carousel.component.scss']
})
export class PopularShowsCarouselComponent implements OnInit {

  @Input()
  public popularShows: Show[];

  constructor() { }

  ngOnInit() {
  }

}
