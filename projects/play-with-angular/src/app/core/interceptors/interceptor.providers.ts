import { ErrorInterceptorProvider } from "./error-interceptor.service";
import { nbAuthJWTInterceptorProvider } from "./nb-auth-jwt-interceptor.provider";

// export const INTERCEPTOR_PROVIDERS = [ErrorInterceptorProvider];
// export const INTERCEPTOR_PROVIDERS = [nbAuthJWTInterceptorProvider];
export const INTERCEPTOR_PROVIDERS = [
  // ErrorInterceptorProvider,
  nbAuthJWTInterceptorProvider,
];
