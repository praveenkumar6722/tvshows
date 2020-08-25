import { Component, OnInit, Input, EventEmitter, Output, ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { Show } from '@mylib/core';
import { Router } from '@angular/router';

@Component({
  selector: 'f-tvshows-genre-collection',
  templateUrl: './genre-collection.component.html',
  styleUrls: ['./genre-collection.component.scss']
})
export class GenreCollectionComponent implements OnInit {


  @Input()
  public shows: Show[];

  @Input()
  public genres: string;

  @Output()
  public showCardClicked: EventEmitter<Show> = new EventEmitter<Show>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public viewAll(genre: string) {
    console.log(genre);
    this.router.navigate(['genre', genre]);
  }


  public cardClicked(data) {
    this.showCardClicked.emit(data);
  }

}
