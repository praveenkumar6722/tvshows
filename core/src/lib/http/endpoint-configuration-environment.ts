import { Endpoint } from '../model/endpoint';

export class EndpointConfigurationEnvironment {

  constructor(private environment: any) {
    this.environment = environment;
  }

  public getEndpoint(name: string): Endpoint {
    if (!this.environment.urls[name]) {
      console.error(name + ' is not available in the current environment. Please add it to the appropiate environment.ts');
    }
    return { name, url: this.environment.urls[name] };
  }
}
