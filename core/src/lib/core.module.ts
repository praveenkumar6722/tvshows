import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
      ]
    };
  }
}
