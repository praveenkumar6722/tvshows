import { Component, OnInit } from '@angular/core';
import { HttpApiService, Resource } from '@mylib/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private httpApiService: HttpApiService) {

  }
  ngOnInit() {

    console.log('init');

    this.httpApiService.get<any[]>(Resource.TvShows).subscribe((data) => {
      console.log(data);
    });

    //  private http:HttpClient
    // this.http.get<any[]>('http://api.tvmaze.com/shows?page=0').subscribe((data) => {
    //   console.log(data);
    // });


  }

}
