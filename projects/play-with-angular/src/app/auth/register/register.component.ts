import {
  Component,
  ChangeDetectionStrategy,
  Inject,
  ChangeDetectorRef
} from "@angular/core";
import {
  NbRegisterComponent,
  NbAuthService,
  NB_AUTH_OPTIONS
} from "@nebular/auth";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent extends NbRegisterComponent {
  constructor(
    protected service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) protected options = {},
    protected cd: ChangeDetectorRef,
    protected router: Router
  ) {
    super(service, options, cd, router);
    this.user = { login: {}, name: {}, emails: {} };
  }
}
