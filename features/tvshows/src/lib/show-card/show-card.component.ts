import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Show } from '@mylib/core';


@Component({
  selector: 'f-tvshows-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.scss']
})
export class ShowCardComponent implements OnInit {

  @Input()
  public show: Show;

  @Output()
  public cardClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  public clicked() {
    console.log('clicked ');
    this.cardClicked.emit(this.show.id);

  }

}
