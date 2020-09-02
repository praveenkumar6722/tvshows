import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * @description
 * This service wraps calls to the Angular Http service.
 * It correctly builds urls based on the environment in which the application is run.
 */

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {
  environment: any;
  constructor(private http: HttpClient, @Inject('environment') environment: any) {
    this.environment = environment;
  }

  public get<T>(
    resource: any,
    path?: string,
    headers?: { [header: string]: string },
  ): Observable<T> {

    let url = this.getEndpoint(this.environment, resource);
    if (path) { url = url + path; }

    return this.http.get<T>(url, { headers });
  }

  public getEndpoint(environment: any, name: string): any {


    if (!environment.urls[name]) {
      console.error(name + ' is not available in the current environment. Please add it to the appropiate environment.ts');
    }

    return environment.urls[name];
  }

}
