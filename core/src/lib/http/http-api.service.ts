import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EndpointConfigurationEnvironment } from './endpoint-configuration-environment';

/**
 * @description
 * This service wraps calls to the Angular Http service.
 * It correctly builds urls based on the environment in which the application is run.
 */

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {
  private endpoints: EndpointConfigurationEnvironment;


  constructor(
    private http: HttpClient,
    @Inject('environment') environment: any,
  ) {
    this.endpoints = new EndpointConfigurationEnvironment(environment);
  }

  public post<T>(resource: string, data?: any, headers?: any): Observable<T> {
    const url = this.endpoint(resource);

    return this.http.post<T>(url, data, { headers });
  }

  public put<T>(resource: string, data?: any, headers?: any): Observable<T> {
    const url = this.endpoint(resource);

    return this.http.put<T>(url, data, { headers });
  }

  public get<T>(
    resource: string,
    pathParams?,
    params?,
    headers?: { [header: string]: string },
  ): Observable<T> {

    console.log('get');
    console.log(resource);

    let url = this.endpoint(resource);

    if (pathParams) {

      Object.keys(pathParams).forEach((k) => {
        console.log(k + ' - ' + pathParams[k]);
        url = url.replace(`:${k}`, pathParams[k]);
      });

    }

    return this.http.get<T>(url, { params, headers });
  }

  public endpoint(resource) {

    return this.endpoints.getEndpoint(resource).url;
  }
}
