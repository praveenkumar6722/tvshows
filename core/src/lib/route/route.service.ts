import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Show, SearchResults } from '../model/show';
import { HttpApiService } from '../http/http-api.service';
import { Resource } from '../http/resource';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private httpApiService: HttpApiService) { }

  public getallTvShows(): Observable<Show[]> {

    return this.httpApiService.get<Show[]>(Resource.TvShows, null);
  }

  public getShowDetails(id: number): Observable<Show> {

    return this.httpApiService.get<Show>(Resource.ShowDetails, `${id}?embed[]=episodes&embed[]=cast`);

  }

  public getSearchResults(params: any): Observable<SearchResults> {

    return this.httpApiService.get<SearchResults>(Resource.Search, `?q=${params}`);

  }



}
