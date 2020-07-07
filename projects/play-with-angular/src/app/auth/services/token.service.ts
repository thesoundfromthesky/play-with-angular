import { Inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import {
  NbPasswordAuthStrategy,
  NbTokenService,
  NB_AUTH_OPTIONS,
  decodeJwtPayload,
  NbAuthOAuth2Token,
  NbAuthService,
} from "@nebular/auth";
import { take, concatMap, tap } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class TokenService {
  constructor(
    private readonly nbPasswordAuthStrategy: NbPasswordAuthStrategy,
    private readonly nbTokenService: NbTokenService,
    private readonly nbAuthService: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) protected options,
    private readonly router: Router
  ) {
  }

  createToken(token: object) {
    const module = "login";
    const createdToken = this.nbPasswordAuthStrategy.createToken(
      this.nbPasswordAuthStrategy.getOption("token.getter")(
        module,
        {
          body: token,
        },
        (this.nbPasswordAuthStrategy as any).options
      ),
      this.nbPasswordAuthStrategy.getOption(`${module}.requireValidToken`)
    );
    this.nbTokenService.set(createdToken);

    if (this.redirect) {
      setTimeout(() => {
        this.router.navigateByUrl(this.redirect);
      }, this.redirectDelay);
    }
  }

  get redirectDelay(): number {
    return this.options.forms?.login?.redirectDelay;
  }
  get redirect(): string {
    return (this.nbPasswordAuthStrategy as any).options?.login?.redirect
      ?.success;
  }
  
  clearToken() {
    this.nbTokenService.clear();
  }

  getTokenExpDate(token) {
    const decoded = decodeJwtPayload(token);
    if (decoded && !decoded.hasOwnProperty("exp")) {
      return null;
    }
    const date = new Date(0);
    date.setUTCSeconds(decoded.exp); // 'cause jwt token are set in seconds
    return date;
  }

  isTokenExpired(token): boolean {
    const date = this.getTokenExpDate(token);
    return !date || new Date() > date;
  }

  isRefreshTokenExpired(token: NbAuthOAuth2Token) {
    const refreshToken =
      "getRefreshToken" in token ? token.getRefreshToken() : undefined;
    const isExpired = refreshToken
      ? this.isTokenExpired(refreshToken)
      : undefined;
    return isExpired;
  }

  clearExpiredRefreshToken() {
    return this.nbAuthService.getToken().pipe(
      tap((token: NbAuthOAuth2Token) => {
        const isExpired = this.isRefreshTokenExpired(token);
        if (isExpired) {
          this.clearToken();
        }
      })
    );
  }

  refreshToken() {
    return this.nbAuthService.getToken().pipe(
      concatMap((data: NbAuthOAuth2Token) => {
        return this.nbAuthService.refreshToken(data.getOwnerStrategyName(), {
          token: JSON.parse(data.toString()),
        });
      }),
      take(1)
    );
    // .subscribe({
    //   next: (data) => {
    //     console.log("data");
    //   },
    // });
  }
}
