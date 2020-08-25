import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Show } from '@mylib/core';
import { Router } from '@angular/router';

@Component({
  selector: 'f-tvshows-genre-collection',
  templateUrl: './genre-collection.component.html',
  styleUrls: ['./genre-collection.component.scss']
})
export class GenreCollectionComponent {


  @Input()
  public shows: Show[];

  @Input()
  public genres: string;

  @Output()
  public showCardClicked: EventEmitter<Show> = new EventEmitter<Show>();

  constructor(private router: Router) { }


  public viewAll(genre: string) {
    this.router.navigate(['genre', genre]);
  }


  public cardClicked(data) {
    this.showCardClicked.emit(data);
  }

}
