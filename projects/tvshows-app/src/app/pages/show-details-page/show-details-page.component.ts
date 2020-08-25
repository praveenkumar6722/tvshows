import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteService } from 'core/src/public-api';
import { Show } from '@mylib/core';

@Component({
  selector: 'app-show-details-page',
  templateUrl: './show-details-page.component.html',
  styleUrls: ['./show-details-page.component.scss']
})
export class ShowDetailsPageComponent implements OnInit {

  public showDetails: Show;

  constructor(private route: ActivatedRoute, private service: RouteService) { }

  ngOnInit() {
    console.log(this.route.snapshot);
    const showId = +this.route.snapshot.paramMap.get('id');
    this.service.getShowDetails(showId).subscribe((data) => {
      this.showDetails = data;
    });
  }

}
