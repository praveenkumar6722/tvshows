import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'f-navigation-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public searchString = '';

  constructor() { }

  ngOnInit() {
  }

  public search() {
    console.log('search clicked - ' + this.searchString);
    this.searchString = '';
  }
}
