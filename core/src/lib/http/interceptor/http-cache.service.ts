import { Injectable } from '@angular/core';
import { HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpCacheService {
  private cache = new Map<string, [Date, HttpEvent<any>]>();

  get(key: string): HttpEvent<any> {
    const tuple = this.cache.get(key);
    if (!tuple) {
      return null;
    }

    const [expires, httpResponse] = tuple;

    // Don't observe expired keys
    const now = new Date();
    if (expires && expires.getTime() < now.getTime()) {
      this.remove(key);

      return null;
    }

    return httpResponse;
  }

  set(key: string, value: HttpEvent<any>, ttl = null) {
    if (ttl) {
      const expires = new Date();
      expires.setSeconds(expires.getSeconds() + ttl);
      this.cache.set(key, [expires, value]);
    } else {
      this.cache.set(key, [null, value]);
    }
  }

  remove(key: string) {
    this.cache.delete(key);
  }

  clear() {
    this.cache.clear();
  }
}
