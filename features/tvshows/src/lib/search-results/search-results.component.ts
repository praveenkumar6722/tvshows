import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { flatMap, tap, map } from 'rxjs/operators';
import { RouteService } from '@mylib/core';

@Component({
  selector: 'f-tvshows-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  public phrase: string;

  public results: any;

  public count: number;

  constructor(private service: RouteService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.route.queryParams.pipe(
      map((query) => this.phrase = query.phrase),
      flatMap((phrase) => this.service.getSearchResults(phrase))
    ).subscribe((data: any) => {
      this.count = data.length;
      this.results = data;
    });
  }

  cardClicked(data) {
    this.router.navigate(['detail', data]);
  }


}
