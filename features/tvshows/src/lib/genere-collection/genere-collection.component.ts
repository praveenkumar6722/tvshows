import { Component, OnInit, Input, EventEmitter, Output, ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { Show } from '@mylib/core';
import { Router } from '@angular/router';

@Component({
  selector: 'f-tvshows-genere-collection',
  templateUrl: './genere-collection.component.html',
  styleUrls: ['./genere-collection.component.scss']
})
export class GenereCollectionComponent implements OnInit {


  @Input()
  public shows: Show[];

  @Input()
  public genres: string;

  @Output()
  public showCardClicked: EventEmitter<Show> = new EventEmitter<Show>();


  constructor(private router: Router) {

  }

  ngOnInit() {

  }


  public viewAll(genre) {
    console.log(genre);
    // this.router.navigate(['/viewall'], { queryParams: { cat: genre } });
  }

  public cardClicked(data) {
    this.showCardClicked.emit(data);
  }



}
