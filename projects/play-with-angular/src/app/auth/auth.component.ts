import { Component, ChangeDetectionStrategy, OnDestroy } from "@angular/core";
import { Location } from "@angular/common";
import { NbAuthComponent, NbAuthService } from "@nebular/auth";
import { Router, NavigationEnd } from "@angular/router";
import { filter, takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";

@Component({
  selector: "auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent extends NbAuthComponent {
  // private readonly destroy$ = new Subject<void>();
  nbCardHeight = {};
  constructor(
    protected auth: NbAuthService,
    protected location: Location,
    private readonly router: Router
  ) {
    super(auth, location);

    // this.router.events
    //   .pipe(
    //     takeUntil(this.destroy$),
    //     filter(
    //       (event): event is NavigationEnd => event instanceof NavigationEnd
    //     )
    //   )
    //   .subscribe({
    //     next: event => {
    //       this.setNbCardHeight(event.url);
    //     }
    //   });
  }

  // setNbCardHeight(urlTree: string) {
  //   const url = urlTree.split("/")[2];
  //   switch (url) {
  //     case "register":
  //       this.nbCardHeight = { height: "calc(100vh + 35rem)" };
  //       break;
  //     case "profile":
  //       this.nbCardHeight = { height: "auto" };
  //       break;
  //     default:
  //       this.nbCardHeight = {};
  //   }
  // }

  // ngOnDestroy() {
  //   super.ngOnDestroy();
  //   this.destroy$.next();
  //   this.destroy$.complete();
  // }
}
