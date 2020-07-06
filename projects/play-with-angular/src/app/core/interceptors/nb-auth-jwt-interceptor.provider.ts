import { HTTP_INTERCEPTORS } from "@angular/common/http";
import {
  NbAuthJWTInterceptor,
  NB_AUTH_TOKEN_INTERCEPTOR_FILTER,
  NbPasswordAuthStrategy,
} from "@nebular/auth";

export const nbAuthJWTInterceptorProvider = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: NbAuthJWTInterceptor,
    multi: true,
  },
  {
    provide: NB_AUTH_TOKEN_INTERCEPTOR_FILTER,
    useFactory: useFactoryProvider,
    deps: [NbPasswordAuthStrategy],
  },
];

function useFactoryProvider(nbPasswordAuthStrategy: NbPasswordAuthStrategy) {
  return (req) => {    
    const baseUrl = nbPasswordAuthStrategy.getOption("baseEndpoint");

    const lookupTable = {
      "GET assets/config/config.dev.json": true,
      [`POST ${baseUrl}${nbPasswordAuthStrategy.getOption("login.endpoint")}`]: true,
      [`POST ${baseUrl}${nbPasswordAuthStrategy.getOption(
        "refreshToken.endpoint"
      )}`]: true,
      [`POST ${baseUrl}${nbPasswordAuthStrategy.getOption("register.endpoint")}`]: true,
      default: false,
    };

    const key = `${req.method} ${req.url}`;
    return key in lookupTable ? lookupTable[key] : lookupTable.default;

    // switch (req.url) {
    //   case "assets/config/config.dev.json":
    //     return true;
    //   case nbPasswordAuthStrategy.getOption("login.endpoint"):
    //     return true;
    //   case nbPasswordAuthStrategy.getOption("refreshToken.endpoint"):
    //     return true;
    //   case nbPasswordAuthStrategy.getOption("register.endpoint"):
    //     return true;
    //   default:
    //     return false;
    // }
  };
}
