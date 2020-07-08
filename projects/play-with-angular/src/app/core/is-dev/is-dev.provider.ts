import { environment } from "../../../environments/environment";

export const IS_DEV = "isDev";

export const isDevProvider = {
  provide: IS_DEV,
  useValue: !environment.production
};
