import {
  Component,
  Inject,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from "@angular/core";
import {
  NbLoginComponent,
  NbAuthService,
  NB_AUTH_OPTIONS
} from "@nebular/auth";
import { Router } from "@angular/router";

@Component({
  selector: "auth-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent extends NbLoginComponent {
  constructor(
    protected service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) protected options = {},
    protected cd: ChangeDetectorRef,
    protected router: Router
  ) {
    super(service, options, cd, router);
  }
}
