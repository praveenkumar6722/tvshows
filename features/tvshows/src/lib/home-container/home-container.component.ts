import { Component, OnInit, Input } from '@angular/core';
import { HttpApiService, Resource, Show } from '@mylib/core';

@Component({
  selector: 'f-tvshows-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {


  @Input()
  public shows: Show[];

  // public popularShows: Show[];

  public uniqueGenere: any;


  get popularShows(): Show[] {
    const shows = this.shows;
    const sorted = shows.sort((a, b) => (b.rating.average) - (a.rating.average));
    return sorted.slice(0, 5);
  }


  get generes(): any {

    const array = this.shows.map(data => data.genres);
    const merged = [].concat.apply([], array);
    return [...new Set(merged)];

  }


  constructor() { }

  ngOnInit() {
    console.log('0000');
    console.log(this.shows);
    console.log('1111');
    console.log(this.popularShows);
    console.log('222');
    console.log(this.generes);
    console.log('333');
  }

}
