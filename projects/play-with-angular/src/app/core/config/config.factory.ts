import { ConfigService } from "./config.service";

export function configFactory(configService: ConfigService) {
  return () => configService.load();
}
