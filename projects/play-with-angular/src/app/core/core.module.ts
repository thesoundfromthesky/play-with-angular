import {
  NgModule,
  ModuleWithProviders,
  Optional,
  SkipSelf,
} from "@angular/core";
import { isDevProvider } from "./is-dev";
import { INTERCEPTOR_PROVIDERS } from "./interceptors";
import { configProvider } from "./config";
import { errorProvider } from "./error";

@NgModule()
export class CoreModule {
  // about singleton service
  // https://angular.io/guide/singleton-services

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        "CoreModule is already loaded. Import it in the AppModule only"
      );
    }
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        isDevProvider,
        configProvider,
        errorProvider,
        INTERCEPTOR_PROVIDERS
      ],
    };
  }
}
