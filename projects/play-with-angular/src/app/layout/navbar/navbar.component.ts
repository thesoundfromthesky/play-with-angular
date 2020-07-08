import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "layout-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  constructor() {}
}
