import { Component, Input, OnInit } from '@angular/core';
import { Show } from '@mylib/core';
import { Router } from '@angular/router';

@Component({
  selector: 'f-tvshows-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {


  @Input()
  public shows: Show[];

  public uniqueGenre: any;

  public popularShows: Show[];

  public genres: string[];

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.popularShows = this.filterPopularShows();
    this.genres = this.filterGenres();

  }

  showCardClicked(data) {

    this.router.navigate(['detail', data]);

  }

  public filterPopularShows(): Show[] {

    const shows = Object.assign([], this.shows);
    const sorted = shows.sort((a, b) => (b.rating.average) - (a.rating.average));
    return sorted.slice(0, 5);

  }

  public filterGenres(): any {

    const array = this.shows.map(data => data.genres);
    const merged = [].concat.apply([], array);
    const filtered = [...new Set(merged)];
    return filtered;

  }


}
