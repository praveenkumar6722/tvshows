import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'f-navigation-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public searchString = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public search() {

    if (this.searchString) {
      this.router.navigate(['search'], { queryParams: { phrase: this.searchString } });
      // this.searchString = '';
    }
  }
}
