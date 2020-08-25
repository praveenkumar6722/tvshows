import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Show, SearchResults } from '../model/show';
import { HttpApiService } from '../http/http-api.service';
import { Resource } from '../http/resource';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private httpApiService: HttpApiService) { }

  public getallTvShows(): Observable<Show[]> {
    return this.httpApiService.get<Show[]>(Resource.TvShows).pipe(map((data) => data.slice(0, 100)));
  }

  public getShowDetails(id: number): Observable<Show> {

    return this.httpApiService.get<Show>(Resource.Show, `${id}?embed[]=episodes&embed[]=cast`);

    // return this.httpApiService.get<Show>(Resource.Show, { id });
  }

  public getSearchResults(params: any): Observable<SearchResults> {

    // return this.httpApiService.get<SearchResults>(Resource.Search, null, params, null);

    return this.httpApiService.get<SearchResults>(Resource.Search, `?q=${params}`);

  }



}
