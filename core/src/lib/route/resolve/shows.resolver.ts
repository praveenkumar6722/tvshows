import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { RouteService } from '../route.service';
import { Observable } from 'rxjs';
import { Show } from '../../model/show';

@Injectable()
export class AllTvShowsResolver implements Resolve<Observable<Show[]>> {
  constructor(private routeService: RouteService) { }

  public resolve(): Observable<Show[]> {
    return this.routeService.allTvShows;
  }
}
