import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { NavItem, Dropdown } from "../models/nav-item";

@Component({
  selector: "navbar-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent implements OnInit {
  navItems: (NavItem | Dropdown)[] = [
    {
      id: 0,
      text: "home",
      link: ["/"],
      active: ["active"],
      options: { exact: true }
    },
    {
      id: 1,
      toggle: "powerball",
      menu: [
        {
          id: 0,
          text: "virtual",
          link: ["/powerball/virtual"],
          active: ["active"],
          options: { exact: false }
        },
        {
          id: 1,
          text: "simulator",
          link: ["/powerball/simulator"],
          active: ["active"],
          options: { exact: false }
        }
      ]
    },
    {
      id: 2,
      toggle: "megamillions",
      menu: [
        {
          id: 0,
          text: "virtual",
          link: ["/megamillions/virtual"],
          active: ["active"],
          options: { exact: false }
        },
        {
          id: 1,
          text: "simulator",
          link: ["/megamillions/simulator"],
          active: ["active"],
          options: { exact: false }
        }
      ]
    }
  ];

  constructor() {}

  ngOnInit() {}

  trackByFn(i: number, e: any) {
    return e.id;
  }
}
