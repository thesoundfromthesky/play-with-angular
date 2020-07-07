import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from './config.interface';
import { IS_DEV } from '../is-dev';
import { NB_AUTH_OPTIONS, NbAuthOptions } from '@nebular/auth';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private config: Config | undefined;
  get(key: string): string | undefined {
    return this.config && this.config[key];
  }

  constructor(
    private readonly http: HttpClient,
    @Inject(IS_DEV) private readonly isDev: boolean,
    @Inject(NB_AUTH_OPTIONS) private readonly options: NbAuthOptions
  ) {}

  load() {
    const configPath = this.isDev
      ? 'assets/config/config.dev.json'
      : 'assets/config/config.prod.json';

    return new Promise<boolean>((resolve, reject) => {
      this.http.get(configPath).subscribe({
        next: (res: any) => {
          this.config = res;

          this.setBaseEndpoint(this.baseUrl);
          resolve(true);
        },
        error: (err) => resolve(false),
      });
    });
  }

  setBaseEndpoint(value: string | undefined) {
    if (this.options?.strategies) {
      (this.options.strategies[0][1] as any).baseEndpoint = value;
    }
  }

  get baseUrl() {
    return this.get('baseUrl');
  }
}
