import { APP_INITIALIZER } from '@angular/core';
import { configFactory } from './config.factory';
import { ConfigService } from './config.service';

export const configProvider = {
  provide: APP_INITIALIZER,
  useFactory: configFactory,
  deps: [ConfigService],
  multi: true
};
