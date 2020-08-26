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


  public get<T>(
    resource: string,
    path?: string,
    headers?: { [header: string]: string },
  ): Observable<T> {

    let url = this.endpoint(resource);
    if (path) { url = url + path; }

    return this.http.get<T>(url, { headers });
  }

  public endpoint(resource) {

    return this.endpoints.getEndpoint(resource).url;
  }
}
