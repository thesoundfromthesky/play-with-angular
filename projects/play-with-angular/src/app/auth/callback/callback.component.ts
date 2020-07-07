import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { TokenService } from "../services/token.service";

@Component({
  selector: "auth-callback",
  templateUrl: "./callback.component.html",
  styleUrls: ["./callback.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CallbackComponent {
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly tokenService: TokenService
  ) {
    const paramMap = this.activatedRoute.snapshot.queryParamMap;
    const token = JSON.parse(paramMap.get("token"));
    this.tokenService.createToken(token);
  }
}
