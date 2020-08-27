import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpCachingInterceptor } from './http/interceptor/http-caching.interceptor';

@NgModule({
  declarations: [],
  imports: [HttpClientModule
  ],
  exports: []
})
export class CoreModule {

  public static forRoot(environment: any): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: 'environment', useValue: environment },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpCachingInterceptor,
          multi: true
        },
      ]
    };
  }
}
