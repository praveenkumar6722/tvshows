import { Component, OnInit, Input } from '@angular/core';
import { Show } from '@mylib/core';

@Component({
  selector: 'f-tvshows-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {

  @Input()
  public showDetails: Show;

  constructor() { }

  ngOnInit() {

  }

}
