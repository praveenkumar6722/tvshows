import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Show } from '@mylib/core';

@Component({
  selector: 'f-tvshows-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {


  @Input()
  public shows: Show[];

  public popularShows: Show[];

  public genres: Set<string>;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.popularShows = this.getPopularShows();
    this.genres = this.getGenres();
  }

  getPopularShows(): Show[] {

    return this.shows.sort((a, b) => (b.rating.average) - (a.rating.average)).slice(0, 5);
  }

  getGenres(): Set<string> {
    const array = this.shows.map(data => data.genres);
    const flattenArray = [].concat(...array);

    return new Set(flattenArray);
  }

  showCardClicked(data: number): void {
    this.router.navigate(['detail', data]);
  }

}
