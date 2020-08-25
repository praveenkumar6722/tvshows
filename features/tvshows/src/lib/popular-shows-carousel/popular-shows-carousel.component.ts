import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Show } from '@mylib/core';

@Component({
  selector: 'f-tvshows-popular-shows-carousel',
  templateUrl: './popular-shows-carousel.component.html',
  styleUrls: ['./popular-shows-carousel.component.scss']
})
export class PopularShowsCarouselComponent {

  @Input()
  public popularShows: Show[];

  @Output()
  public showClicked: EventEmitter<number> = new EventEmitter<number>();


  showSelected(data): void {

    this.showClicked.emit(data);
  }
}
