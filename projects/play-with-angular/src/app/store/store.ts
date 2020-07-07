import { environment } from '../../environments/environment';

import { NgxsModuleOptions, NoopNgxsExecutionStrategy } from "@ngxs/store";

// https://itnext.io/ngxs-thoughts-patterns-architecture-and-best-practices-c991c42618d9
export const ecologyState = [];

// https://www.ngxs.io/advanced/options
export const ngxsConfig: NgxsModuleOptions = {
  developmentMode: !environment.production,
  selectorOptions: {
    suppressErrors: false,
    injectContainerState: false
  },
  compatibility: {
    strictContentSecurityPolicy: true
  },
  executionStrategy: NoopNgxsExecutionStrategy
};
