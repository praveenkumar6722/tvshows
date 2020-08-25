import { Component, OnInit, Input } from '@angular/core';
import { Show } from '@mylib/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'f-tvshows-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {


  @Input()
  public shows: Show[];

  // public popularShows: Show[];

  public uniqueGenre: any;


  get popularShows(): Show[] {
    const shows = Object.assign([], this.shows);

    const sorted = shows.sort((a, b) => (b.rating.average) - (a.rating.average));
    return sorted.slice(0, 5);
  }


  get genres(): any {

    const array = this.shows.map(data => data.genres);
    const merged = [].concat.apply([], array);
    return [...new Set(merged)];

  }


  constructor(private router: Router) { }

  ngOnInit() {

    console.log(this.shows);
    console.log(this.popularShows);
    console.log(this.genres);

  }

  showCardClicked(data) {

    this.router.navigate(['detail', data]);

  }


}
