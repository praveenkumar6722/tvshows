import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Show } from '@mylib/core';

@Component({
  selector: 'f-tvshows-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent {

  @Input()
  public shows: Show[];

  @Input()
  public genre: string;

  constructor(private router: Router) { }

  cardClicked(data) {
    this.router.navigate(['detail', data]);
  }

}
