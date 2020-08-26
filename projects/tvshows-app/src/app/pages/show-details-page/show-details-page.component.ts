import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteService } from 'core/src/public-api';
import { Show } from '@mylib/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-show-details-page',
  templateUrl: './show-details-page.component.html',
  styleUrls: ['./show-details-page.component.scss']
})
export class ShowDetailsPageComponent implements OnInit {

  public showDetails: Show;
  public error = false;

  constructor(private route: ActivatedRoute, private service: RouteService) { }

  ngOnInit() {
    const showId = +this.route.snapshot.paramMap.get('id');
    this.service.getShowDetails(showId)
      .pipe(catchError((error) => {
        this.error = true;
        return throwError(error);
      }))
      .subscribe((data) => {
        this.showDetails = data;
      });
  }

}
