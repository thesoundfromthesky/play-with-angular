import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Config } from "./config.interface";
import { IS_DEV } from "../is-dev";
import { NB_AUTH_OPTIONS } from '@nebular/auth';

@Injectable({
  providedIn: "root",
})
export class ConfigService {
  private config: Config;
  get(key: string): string {
    return this.config[key];
  }

  constructor(
    private readonly http: HttpClient,
    @Inject(IS_DEV) private readonly isDev,
    @Inject(NB_AUTH_OPTIONS) private readonly options
  ) {}

  load() {
    const configPath = this.isDev
      ? "assets/config/config.dev.json"
      : "assets/config/config.prod.json";

    return new Promise<boolean>((resolve, reject) => {
      this.http.get(configPath).subscribe(
        (res: Config) => {
          this.config = res;

          this.setBaseEndpoint(this.baseUrl);
          resolve(true);
        },
        (err) => resolve(false)
      );
    });
  }

  setBaseEndpoint(value: string) {
    this.options.strategies[0][1].baseEndpoint = value;
  }

  get baseUrl() {
    return this.get("baseUrl");
  }
}
