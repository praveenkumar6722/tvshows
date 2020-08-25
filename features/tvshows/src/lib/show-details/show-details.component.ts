import { Component, Input } from '@angular/core';
import { Show } from '@mylib/core';

@Component({
  selector: 'f-tvshows-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent {

  @Input()
  public showDetails: Show;

}
