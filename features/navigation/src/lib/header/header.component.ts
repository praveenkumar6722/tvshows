import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'f-navigation-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public searchString = '';

  constructor(private router: Router) { }

  public search() {

    if (this.searchString) {
      this.router.navigate(['search'], { queryParams: { phrase: this.searchString } });
      // this.searchString = '';
    }
  }
}
