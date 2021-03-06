import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Show } from '@mylib/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public shows: Show[];

  constructor(private route: ActivatedRoute) {

  }
  ngOnInit() {
    const { shows } = this.route.snapshot.data;
    this.shows = shows;
  }

}
