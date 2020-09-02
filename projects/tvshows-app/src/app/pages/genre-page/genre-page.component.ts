import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Show } from '@mylib/core';

@Component({
  selector: 'app-genre-page',
  templateUrl: './genre-page.component.html',
  styleUrls: ['./genre-page.component.scss']
})
export class GenrePageComponent implements OnInit {

  public genreShows: Show[];
  public genre: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const { shows } = this.route.snapshot.data;
    this.genre = this.route.snapshot.paramMap.get('genre');
    this.genreShows = shows.filter(data => data.genres.includes(this.genre));
  }

}
