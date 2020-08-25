import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteService } from 'core/src/public-api';
import { Show } from '@mylib/core';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-show-details-page',
  templateUrl: './show-details-page.component.html',
  styleUrls: ['./show-details-page.component.scss']
})
export class ShowDetailsPageComponent implements OnInit {

  // public loading: boolean;
  public showDetails: Show;



  constructor(private route: ActivatedRoute, private service: RouteService) { }

  ngOnInit() {

    const showId = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getShowDetails(showId).pipe(delay(10)).subscribe((data) => {
      console.log(data);
      this.showDetails = data;
    });
  }

}
