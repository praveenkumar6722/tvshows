import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Show } from '@mylib/core';

@Component({
  selector: 'f-tvshows-genre-collection',
  templateUrl: './genre-collection.component.html',
  styleUrls: ['./genre-collection.component.scss']
})
export class GenreCollectionComponent {

  @Input()
  public shows: Show[];

  @Input()
  public genres: Set<string>;

  @Output()
  public showCardClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor(private router: Router) { }

  public viewAll(genre: string): void {
    this.router.navigate(['genre', genre]);
  }

  public cardClicked(data: number): void {
    this.showCardClicked.emit(data);
  }

}
