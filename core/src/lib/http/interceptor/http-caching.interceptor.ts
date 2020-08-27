import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { tap, filter } from 'rxjs/operators';
import { HttpCacheService } from './http-cache.service';


/**
 * @description
 * This interceptor intercepts calls to the Angular Http service and caches the responses.
 */
@Injectable({
  providedIn: 'root'
})
export class HttpCachingInterceptor implements HttpInterceptor {

  private static readonly TTL = 5 * 60; // Time to Live in seconds

  constructor(private cache: HttpCacheService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    let result$: any;

    const cachedResponse = this.cache.get(request.urlWithParams);

    if (request.method !== 'GET') {
      result$ = next.handle(request);
    } else if (!cachedResponse) {
      result$ = this.sendRequest(request, next);
    } else {
      result$ = of(cachedResponse);
    }

    return result$;
  }

  sendRequest(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      filter(event => event instanceof HttpResponse),
      filter((event: HttpResponse<any>) => event.status === 200),
      tap(event =>
        this.cache.set(
          request.urlWithParams,
          event,
          HttpCachingInterceptor.TTL,
        ),
      ),
    );
  }
}
