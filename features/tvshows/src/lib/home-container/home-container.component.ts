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

  public genres: string[];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.popularShows = this.getPopularShows();
    this.genres = this.getGenres();
  }

  getPopularShows(): Show[] {

    return this.shows.sort((a, b) => (b.rating.average) - (a.rating.average)).slice(0, 5);
  }

  getGenres(): any {
    const array = this.shows.map(data => data.genres);
    const flattenArray = [].concat(...array);
    const genres = [...new Set(flattenArray)];

    return genres;
  }

  showCardClicked(data) {
    this.router.navigate(['detail', data]);
  }

}
