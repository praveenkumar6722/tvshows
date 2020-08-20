import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Show } from '../model/show';
import { HttpApiService } from '../http/http-api.service';
import { Resource } from '../http/resource';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private httpApiService: HttpApiService) { }

  get allTvShows(): Observable<Show[]> {
    return this.httpApiService.get<Show[]>(Resource.TvShows).pipe(map((data) => data.slice(0, 100)));
  }

}
