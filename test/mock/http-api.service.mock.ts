import { of } from 'rxjs';

export class HttpApiServiceMock {
  constructor(private getEndpoint = {}) { }

  public get(key: string, path?: any, headers?: any) {
    return of(this.getEndpoint[key]);
  }

}
